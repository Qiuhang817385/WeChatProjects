import { observable } from 'mobx'
import Taro from '@tarojs/taro'

const todoStore = observable({
  todostest: ['1', '2'],
  addTodo (item) {
    console.log(item);
    console.log('调用了');
    this.todostest.push(item);
    console.log(this.todostest);
  },
  removeTodo (i) {
    Taro.showLoading({
      title: '删除中'
    })
    // 跟dva不一样,dva默认是同步的
    setTimeout(() => {
      this.todostest.splice(i, 1);
      Taro.hideLoading()
    }, 100);
  }
})
export default todoStore