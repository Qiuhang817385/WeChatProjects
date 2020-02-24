import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'
import 'taro-ui/dist/style/index.scss'; // 全局引入一次即可
import counterStore from './store/counter'
import bookStore from './store/book'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
wx.cloud.init({
  env: 'test-zdct3',
  traceUser: true
})

const store = {
  counterStore,
  bookStore
}

class App extends Component {

  config = {
    pages: [
      'pages/me/me',
      'pages/index/index',
      'pages/book/book',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    "tabBar": {
      "selectedColor": "#EA5149",
      "list": [
        {
          "pagePath": "pages/index/index",
          "text": "首页",
          "iconPath": "./images/img/book.png",
          "selectedIconPath": "./images/img/book-active.png"
        },
        {
          "pagePath": "pages/book/book",
          "text": "首页",
          "iconPath": "./images/img/book.png",
          "selectedIconPath": "./images/img/book-active.png"
        },
        {
          "pagePath": "pages/me/me",
          "text": "我",
          "iconPath": "./images/img/me.png",
          "selectedIconPath": "./images/img/me-active.png"
        }
      ]
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
