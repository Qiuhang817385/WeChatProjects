import Taro, { PureComponent } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import './active.scss'

class Active extends PureComponent {

  config = {
    navigationBarTitleText: '活动'
  }

  state = {
    active: [{
      type: "cut",
      info: [
        {
          man: 48,
          jian: 10
        },
        {
          man: 58,
          jian: 20
        },
        {
          man: 100,
          jian: 30
        }
      ]
    }]
  }

  getTextByType (type) {
    switch (type) {
      case "cut":
        return "减"
      default:
        break;
    }
  }
  // 前提,array是有数据的
  // 一般需要加判断,判断类型/判断是否为空
  getLine (arr) {
    let newArr = arr.map((item, index) => {
      console.log(item)
      return `
        满${item.man}减${item.jian}
      `
    });
    /*或者return   
      arr.map((item, index) => {
          console.log(item)
          return `
            满${item.man}减${item.jian}
          `
        }).join(";")
    */
    console.log(newArr)
    return newArr
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
    // active需要加校验不能为空
    let { active: [firstItem] } = this.state;
    console.log(firstItem)
    return (
      <View className='active'>
        <Text className='type'>{this.getTextByType(firstItem.type)}</Text>
        <Text>{this.getLine(firstItem.info)}</Text>
        <Text className='length'>{this.state.active.length}个活动</Text>
      </View>
    );
  }
}
export default Active;