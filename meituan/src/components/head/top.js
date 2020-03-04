import Taro, { PureComponent } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import './top.scss';

class Top extends PureComponent {

  config = {
    navigationBarTitleText: '顶部'
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
      <View className='top'>
        <View className='left'>
          <Image className='img' src={require('../../assets/img/left.png')} alt='n' />
        </View>
        <View className='right'>
          <Image className='img' src={require('../../assets/img/search.png')} alt='n' />
          <Image className='img' src={require('../../assets/img/colletion.png')} alt='n' />
          <Image className='img' src={require('../../assets/img/tuan.png')} alt='n' />
          <Image className='img' src={require('../../assets/img/dian.png')} alt='n' />
        </View>
      </View>
    );
  }
}
export default Top;