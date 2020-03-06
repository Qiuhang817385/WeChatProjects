import Taro, { PureComponent } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import './bottom.scss'
import { getAllFoodInfo, getEvent } from '../../utils/common'

let event = getEvent();
class Bottom extends PureComponent {

  config = {
    navigationBarTitleText: ''
  }

  state = {
    Num: 1,
    sendPrice: 3,
    supportTakeBySelf: true,
    send: 20,
    allPrice: 1
  }
  componentDidMount () {
    // 获取整体存储的菜品数据进行计算
    //获取计算好的,设置给state,使用这种
    let { allPrice, allNum } = getAllFoodInfo();
    this.setState({
      Num: allNum,
      allPrice: allPrice
    })
    event.on('add', () => {
      let { allPrice, allNum } = getAllFoodInfo();
      this.setState({
        Num: allNum,
        allPrice: allPrice
      })
    })
  }
  render () {
    const { Num, sendPrice, supportTakeBySelf, send, allPrice } = this.state;

    return (
      <View className='bottom'>
        <View className='bottom_body'>
          {
            Num ?
              <Text className='num'>
                {Num}
              </Text>

              : null
          }
          <Image className='store_img' src={Num ? require('../../assets/img/store (1).png') : require('../../assets/img/store.png')}></Image>
          <View className='info'>
            {/* 
            {
              sendPrice ? <Text> 另需配送费{sendPrice}元 </Text>
                : null
            }
             */}
            {/* {sendPrice ?  `另需配送费${sendPrice}元` : null} */}
            {
              allPrice ?
                <Text className='price'>总价${allPrice}元</Text> :
                <Text>
                  <Text>{sendPrice ? `另需配送费${sendPrice}元` : null}</Text>
                  <Text>{supportTakeBySelf ? `支持自取` : null}</Text>
                </Text>
            }
          </View>
          <View className='submit'>
            {allPrice >= send ? <Text className='goPay'>去结算</Text> : <Text>{send ? `$${send}元起送` : ''}</Text>}
          </View>
        </View>
      </View>
    );
  }
}
export default Bottom;