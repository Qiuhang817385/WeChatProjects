import Taro, { PureComponent } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import './cata.scss'

class Cata extends PureComponent {

  config = {
    navigationBarTitleText: ''
  }

  state = {
    cata: [
      {
        name: "专场",
        id: 1
      },
      {
        name: "热销",
        id: 2
      },
      {
        name: "折扣",
        id: 3
      },
      {
        name: "主食",
        id: 4
      },
      {
        name: "热炒",
        id: 5
      },
      {
        name: "凉菜",
        id: 6
      },
      {
        name: "专属优惠",
        id: 7
      }
    ],
    selectCata: null
  }
  // 这一段逻辑有待商榷
  selectClick (item) {
    if (this.state.selectCata && this.state.selectCata.id != item.id) {
      this.setState({
        selectCata: item
      })
    } else {
      this.setState({
        selectCata: item
      })
    }
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
    const { selectCata } = this.state;
    return (
      <View className='cata'>
        {
          this.state.cata.map((item, index) => {
            return (<Text
              onClick={this.selectClick.bind(this, item)}
              className={selectCata && selectCata.id == item.id ? 'cata_name_active' : 'cata_name'}
              key={item.id}
            >{item.name}</Text>)
          })
        }
      </View>
    );
  }
}
export default Cata;