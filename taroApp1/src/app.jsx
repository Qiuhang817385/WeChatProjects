import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'
// app.js
import 'taro-ui/dist/style/index.scss'; // 全局引入一次即可

// import counterStore from './store/counter';
import booksStore from './store/books';
import todoStore from './store/test';

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  // counterStore,
  booksStore,
  todoStore
}

class App extends Component {


  config = {
    pages: [
      // 'pages/index/index',
      'pages/books/books'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '开发小程序标题',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () { }

  componentDidShow () { }

  componentDidHide () { }

  componentDidCatchError () { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
