import Taro, { PureComponent } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux'
import './active.scss';

@connect(({ headReducer }) => ({ headReducer }))
class Active extends PureComponent {

  config = {
    navigationBarTitleText: ''
  }
  getTextByType (type) {
    switch (type) {
      case "cut":
        return "减"
      default:
        break;
    }
  }
  getLine (arr) {
    if (Array.isArray(arr) && arr.length > 0) {
      return arr.map((item) => `满${item.man}减${item.jian};`);
    } else {
      return '暂无活动';
    }
  }
  render () {
    const { headReducer } = this.props

    // let active = headReducer.active;
    let { type, info } = headReducer.active[0];
    return (
      <View className='active'>
        <Text className='type'>
          {this.getTextByType(type)}
        </Text>
        <Text>{this.getLine(info)}</Text>
        <Text className='length'>{headReducer.active.length}个活动</Text>
      </View>
    );
  }
}
export default Active;