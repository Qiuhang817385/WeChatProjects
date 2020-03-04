import Taro, { PureComponent } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { AtButton, AtTabsPane, AtTabs } from 'taro-ui'
import Cata from './cata'
import FoodList from './foodList'
import './food.scss'

class Food extends PureComponent {

  config = {
    navigationBarTitleText: 'cata'
  }

  state = {
    current: 0,
    tabList: [{ title: "点菜" }, { title: "评论" }, { title: "商家" }]
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }

  componentWillMount () { }
  componentDidMount () { }
  componentWillReceiveProps (nextProps, nextContext) { }
  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { }
  componentDidCatchError () { }
  componentDidNotFound () { }
  render () {
    return (
      <View>
        <AtTabs current={this.state.current} onClick={this.handleClick.bind(this)} tabList={this.state.tabList}>
          <AtTabsPane>
            <View className='food_body'>
              <Cata></Cata>
              <FoodList></FoodList>
            </View>
          </AtTabsPane>
          <AtTabsPane>
            评价
          </AtTabsPane>
          <AtTabsPane>
            商家
          </AtTabsPane>
        </AtTabs>
      </View >
    );
  }
}
export default Food;