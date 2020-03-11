import Taro, { PureComponent } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { add, dec } from '../../actions/testcart'
import Head from '../../components/head/head';
import Food from '../../components/food/food'
import './index.scss'

class Index extends PureComponent {

  config = {
    navigationBarTitleText: ''
  }

  state = {}

  componentWillMount () {
    console.log(this.props)
  }
  componentDidMount () { }
  componentWillReceiveProps (nextProps, nextContext) { }
  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { }
  componentDidCatchError () { }
  componentDidNotFound () { }
  render () {
    // const { testCart, add } = this.props;
    return (
      <View className='index'>
        <Head></Head>
        <Food></Food>
      </View>
    );
  }
}
export default Index;