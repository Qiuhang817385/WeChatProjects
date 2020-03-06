import Taro, { PureComponent } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { AtButton, AtTabsPane, AtTabs } from 'taro-ui'
import Cata from './cata'
import FoodList from './foodList'
import './food.scss'



class Food extends PureComponent {

  config = {
    navigationBarTitleText: 'cata'
  }

  state = {
    current: 0,
    tabList: [{ title: "点菜" }, { title: "评论" }, { title: "商家" }],
    // 餐品数据存储
    // 没有餐品数据的情况下去后台去查
    foodList: [],
    cureentList: [],
    selectCata: null
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  // 这里开始,使用的传统的传值方法,没有使用redux来做项目
  // 切换分类
  changeCata (parma) {
    // 可以拿到当前选中的分类
    console.log(parma);
    this.setState({
      selectCata: parma
    })
    // 之后去查当前分类下是否有数据,如果有,不需要加载,没有,加载
    // some    foodList是一个整体的集合
    if (this.state.foodList.some(item => item.pid == parma.id)) {
      // 有,不需要加载
      this.setState({
        cureentList: this.state.foodList.filter(item => item.pid == parma.id)
      })

    } else {
      // 没有,需要加载数据
      this.setState({
        foodList: this.state.foodList.concat(this.mockData(parma))
      }, () => {
        console.log(this.state.foodList);

        this.setState({
          cureentList: this.state.foodList.filter(item => item.pid == parma.id)
        })
      })

    }
  }
  mockData (data) {
    let count = Math.floor(Math.random() * 2) + 1;
    // let imgUrl = `../../assets/img/${count}.png`;
    // console.log(imgUrl);
    return Array.from(Array(Math.floor(Math.random() * 20)), (v, k) => {
      return {
        title: data.id + '菜品' + (k + 1),
        id: data.id + "_" + k,
        pid: data.id,
        img: count,
        sel: Math.floor(Math.random() * 200),
        price: Math.floor(Math.random() * 40)
      }
    })
  }

  render () {
    return (
      <View>
        <AtTabs current={this.state.current} onClick={this.handleClick.bind(this)} tabList={this.state.tabList}>
          <AtTabsPane>
            <View className='food_body'>
              <Cata onChangeCata={this.changeCata.bind(this)}></Cata>
              <FoodList style='width:100%' selectCata={this.state.selectCata} cureentList={this.state.cureentList}></FoodList>
            </View>
          </AtTabsPane>
          <AtTabsPane>
            评价
          </AtTabsPane>
          <AtTabsPane>
            商家
          </AtTabsPane>
        </AtTabs>
      </View >
    );
  }
}
export default Food;