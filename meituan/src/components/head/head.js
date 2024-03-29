import Taro, { PureComponent } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import Top from './top';
import Active from './active';

import './head.scss'

class Head extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      store: {
        title: "川香居",
        notice: "欢迎光临,很高兴为您服务",
        tags: ["味道赞", "主食真好", "分量足"]
      }
    }
  }
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
    let { store } = this.state;

    return (
      <View className='head'>
        {/* 背景 */}
        <Top></Top>
        <Image className='back' src={require('../../assets/img/back.jpg')}></Image>
        {/* 中部店铺信息 */}
        <View className='store'>
          <Image className='store_img' src={require('../../assets/img/store.jpg')}></Image>
          <View className='store_text'>
            <Text>{store.title}</Text>
            <Text>{store.notice}</Text>
            <View>
              {
                store.tags.map((item, index) => {
                  return (
                    <Text className='tags_text' key={index}>{item}</Text>
                  )
                })
              }
            </View>
          </View>
        </View>
        <Active></Active>
      </View>
    );
  }
}
export default Head;