import { observable } from 'mobx'
import Taro from '@tarojs/taro'

const bookStore = observable({
  todo: ['1', '2'],
  addTodo (item) {
    console.log(item);
    console.log('调用了');
    this.todo.push(item);
    console.log(this.todo);
  },
  removeTodo (i) {
    Taro.showLoading({
      title: '删除中'
    })
    // 跟dva不一样,dva默认是同步的
    setTimeout(() => {
      this.todo.splice(i, 1);
      Taro.hideLoading()
    }, 1000);
  }
})
export default bookStore