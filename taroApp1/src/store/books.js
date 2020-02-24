import { observable, action } from 'mobx';
//observable可以把普通对象,变成响应式,写起来比dva要舒服
// 类似vuex

const booksStore = observable({
  todos2: [],
  addTodo (item) {
    console.log(item);

    this.todos2.push(item);

    console.log(this.todos2);
  }
})
export default booksStore;
