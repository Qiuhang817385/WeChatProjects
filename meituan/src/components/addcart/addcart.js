import Taro, { PureComponent } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import './addcart.scss'
import { getFoodCount, setFoodCount, getEvent } from '../../utils/common'

let myEvent = getEvent()
class AddCart extends PureComponent {

  config = {
    navigationBarTitleText: ''
  }
  // 需要拿到菜品的信息,从上级组件中传递下来
  state = {
    Num: 0
  }
  add () {
    if (this.props.food) {
      setFoodCount(this.props.food, this.state.Num, 'add', () => {
        this.setState({
          Num: getFoodCount(this.props.food)
        })
        myEvent.emit('add')
      })

    }
  }
  cut () {
    console.log('执行')
    if (this.props.food) {
      if (this.state.Num >= 1) {
        setFoodCount(this.props.food, this.state.Num, 'cut', () => {
          this.setState({
            Num: getFoodCount(this.props.food)
          })
          myEvent.emit('add')
        })

      }
    } else {
      console.log('err')
    }
  }
  componentWillMount () { }
  componentDidMount () {
    this.setState({
      Num: getFoodCount(this.props.food)
    })
    myEvent.on("changeCata", () => {
      this.setState({
        Num: getFoodCount(this.props.food)
      })
    })
  }
  render () {
    let hideClass = this.state.Num > 0 ? " " : "hide";
    console.log(hideClass);

    return (
      <View className='addcart'>
        <Image className={this.state.Num > 0 ? 'optionImg' : 'optionImg hide'} onClick={this.cut.bind(this)} src={require("../../assets/img/cut.png")}></Image>
        <Text className={'num ' + hideClass}>{this.state.Num}</Text>
        <Image className='optionImg' onClick={this.add.bind(this)} src={require("../../assets/img/add.png")}></Image>
      </View>
    );
  }
}
export default AddCart;