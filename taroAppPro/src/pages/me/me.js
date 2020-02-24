import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx';
import { AtButton } from 'taro-ui';
import './me.scss';

const db = wx.cloud.database()

@inject('counterStore')
@observer
class Me extends Component {
  config = {
    navigationBarTitleText: '个人中心'
  }
  state = {
    userInfo: Taro.getStorageSync('userInfo') || {}
  }
  onGetUserInfo = (e) => {
    // 使用云函数
    let userInfo = e.detail.userInfo;
    wx.cloud.callFunction({
      name: 'login',
      complete: res => {
        userInfo.openid = res.result.openid;
        this.setState({
          userInfo
        })
        Taro.getStorageSync('userInfo', userInfo)
      }
    })
  }
  addBook (isbn) {
    wx.cloud.callFunction({
      name: 'douban',
      data: { isbn },
      success: ((result) => {
        console.log(result);
        result.userInfo = this.state.userInfo
        db.collection('doubanbook').add({
          data: result.result,
          success (add) {
            // 会返回一个id,如果返回成功
            if (add._id) {

              wx.showModal({
                title: '添加成功',
                content: `《${result.result.title}》添加成功`,
              })

            }
          }
        })
      })
    })
  }
  scanBook = () => {
    Taro.scanCode({
      success: res => {
        this.addBook(res.result)
      }
    })
  }
  render () {
    return (
      <View className='user-container'>
        {
          this.state.userInfo.openid ? <View>
            <Image className='avatar' src={this.state.userInfo.avatarUrl} />
            <View>
              {this.state.userInfo.nickName}
            </View>
            <AtButton type='primary' onClick={this.scanBook}>扫描图书</AtButton>
          </View> : <View>
              <Image className='avatar' src='http://image.shengxinjing.cn/rate/unlogin.png' />

              <View>
                <AtButton type='primary' size='small' openType='getUserInfo' onGetUserInfo={this.onGetUserInfo}>
                  登录
                </AtButton>
              </View>
            </View>
        }
      </View>
    )
  }
}

export default Me 
