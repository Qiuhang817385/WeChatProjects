import Taro, { Component } from '@tarojs/taro';
import { View, Text, Input } from '@tarojs/components';
import { AtButton, AtList, AtListItem } from 'taro-ui'

import { observer, inject } from '@tarojs/mobx';
// 注入需要的store
@inject('booksStore')
@inject('todoStore')
@observer
class Books extends Component {
  config = {
    navigationBarTitleText: '这里是图书'
  }
  constructor(props) {
    super(props);
    this.state = {
      todos: ['吃饭a', '睡觉', '学习'],
      val: ''
    }
    this.handleInput = this.handleInput.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }
  // this的引入问题可以使用箭头函数??奇怪,并不能,为什么
  handleInput (e) {
    this.setState({
      val: e.target.value
    })
  }
  handleClick = () => {
    const { booksStore } = this.props;
    booksStore.addTodo(this.state.val)
    this.setState({
      // todos: [...this.state.todos, this.state.val],
      val: ''
    })
  }
  handleClick2 = () => {
    const { todoStore } = this.props;
    todoStore.addTodo(this.state.val)
    this.setState({
      val: ''
    })
  }
  handleChange = (item) => {
    const { todoStore } = this.props;
    todoStore.removeTodo(item)
  }
  render () {
    const { booksStore, todoStore } = this.props;
    return (
      <View>
        <Text>demo</Text> \n
        这是一个按钮
        <View>
          <Input value={this.state.val} onChange={this.handleInput}>
          </Input>
        </View>
        <AtButton type='primary' onClick={this.handleClick}>按钮</AtButton>
        <AtButton type='primary' onClick={this.handleClick2}>按钮2</AtButton>
        {
          this.state.todos.map(v => {
            return (
              <View>
                <Text>
                  {v}
                </Text>
              </View>
            )
          })
        }
        <View>
          {
            booksStore.todos2.map(v => {
              return (
                <View>
                  <Text>
                    {v}
                  </Text>
                </View>
              )
            })
          }
        </View>
        <View>
          {/* https://blog.csdn.net/qq_38606793/article/details/88049894
这个打印这个testArray数组会发现这个时候的数组类型已经不是我们常规的array类型了，已经被mobx转换成了observableArray类型的数组，这种的如果你的store里面只有这一个数组没有其他变量的时候，更新整个数组，除非你是将这个数组置为空，不然组件是不会观察到他的改变，就不会重新render了
          在组件中使用这个数组的时候，slice()一下转变成我们正常的js类型的array就可以了
           */}
          <AtList>

            {
              todoStore.todostest.slice().map((item, i) => {
                return (
                  <View>
                    <AtListItem title={item} isSwitch onSwitchChange={() => this.handleChange()}>
                    </AtListItem>
                  </View>
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