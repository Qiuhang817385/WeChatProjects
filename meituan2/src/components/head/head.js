import Taro, { PureComponent } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux'
import './head.scss'
import Active from './Active';
import Top from './Top'

@connect(({ headReducer }) => ({ headReducer }))
class Head extends PureComponent {
  config = {
    navigationBarTitleText: ''
  }

  render () {
    const { headReducer } = this.props;
    return (
      <View className='head'>
        {/* 背景 */}
        <Top></Top>
        <Image className='back' src={require('../../assets/img/back.jpg')}></Image>
        <View className='store'>
          <Image className='store_img' src={require('../../assets/img/store.jpg')}></Image>
          <View className='store_text'>
            <Text>{headReducer.store.title}</Text>
            <Text>{headReducer.store.notice}</Text>
            <View>
              {
                headReducer.store.tags.map((item, index) => {
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