import Taro, { Component } from '@tarojs/taro';
import { View, Text, Input } from '@tarojs/components';
import { AtButton, AtList, AtListItem } from 'taro-ui'

import { observer, inject } from '@tarojs/mobx';
// 注入需要的store
@inject('bookStore')
@observer
class Books extends Component {
  config = {
    navigationBarTitleText: '这里是图书'
  }
  constructor(props) {
    super(props);
    this.state = {
      val: ''
    }
    this.handleInput = this.handleInput.bind(this);
  }
  // this的引入问题可以使用箭头函数??奇怪,并不能,为什么
  handleInput (e) {
    this.setState({
      val: e.target.value
    })
  }
  handleClick = () => {
    const { bookStore } = this.props;
    bookStore.addTodo(this.state.val)
    this.setState({
      val: ''
    })
  }
  handleChange = (item) => {
    const { bookStore } = this.props;
    bookStore.removeTodo(item)
  }
  render () {
    const { bookStore } = this.props;
    return (
      <View>
        <Text>demo</Text> \n
        这是一个按钮
        <View>
          <Input value={this.state.val} onChange={this.handleInput}>
          </Input>
        </View>
        <AtButton type='primary' onClick={this.handleClick}>按钮</AtButton>
        <View>
          <AtList>
            {
              bookStore.todo.slice().map((item, i) => {
                return (
                  <AtListItem title={item} isSwitch onSwitchChange={() => this.handleChange()}>
                  </AtListItem>
                )
              })
            }
          </AtList>
        </View>
      </View>
    )
  }
}
export default Books;