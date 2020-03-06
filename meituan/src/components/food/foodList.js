import Taro, { PureComponent } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import './foodList.scss'
import AddCart from '../addcart/addcart'

class FoodList extends PureComponent {

  config = {
    navigationBarTitleText: ''
  }

  state = {

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
    // console.log(JSON.stringify(this.props.currentList))
    // console.log(this.props.cureentList)
    let { selectCata, cureentList } = this.props;
    console.log(selectCata, cureentList)
    return (
      <View className='foodlist'>
        <Text>{selectCata ? selectCata.name : ""}</Text>
        <View className='foodlist_forlist'>
          {
            cureentList.map((item, index) => {
              return (<View key={item.id} className='foodlist_item'>
                <Image className='foodlist_item_img' src={item.img == 2 ? require('../../assets/img/2.png') : require('../../assets/img/1.png')}></Image>
                <View className='foodlist_item_info'>
                  <Text>{item.title}</Text>
                  <Text>月售{item.sel}</Text>
                  <Text className='price'>价格{item.price}</Text>
                  <AddCart food={item}></AddCart>
                </View>
              </View>)
            })
          }
        </View>
      </View>
    );
  }
}
export default FoodList;