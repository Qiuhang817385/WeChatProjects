import Taro, { PureComponent } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { AtTabsPane, AtTabs, AtButton } from 'taro-ui'
import { connect } from '@tarojs/redux';
import './food.scss';
import Cata from './cata';

@connect(({ foodReducer }) => ({
  foodReducer
})

)
class Food extends PureComponent {

  config = {
    navigationBarTitleText: ''
  }

  state = {
    current: 0,
    tabList: []
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  componentDidMount () {
    let tabList = this.props.foodReducer.tabList;
    this.setState({
      tabList
    })
  }

  render () {
    console.log(this.state.current)
    return (
      <View>
        <AtTabs current={this.state.current} onClick={this.handleClick.bind(this)} tabList={this.state.tabList}>
          <AtTabsPane>
            <View className='food_body'>
              <Cata></Cata>
            </View>
          </AtTabsPane>
          <AtTabsPane>
            评价1
          </AtTabsPane>
          <AtTabsPane>
            商家
          </AtTabsPane>
        </AtTabs>
      </View>
    );
  }
}
export default Food;