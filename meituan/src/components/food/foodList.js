import Taro, { PureComponent } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

class FoodList extends PureComponent {

  config = {
    navigationBarTitleText: ''
  }

  state = {}

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
        FoodlIST
      </View>
    );
  }
}
export default FoodList;