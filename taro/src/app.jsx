import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index';
import Show from './pages/show';


import configStore from './store'

import './app.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5') {
  require('nerv-devtools')
}

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/show/index',
      'pages/index/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'H5端',
      navigationBarTextStyle: 'black'
    },
    "tabBar": {
      "selectedColor": "#EA5149",
      "list": [
        {
          "pagePath": "pages/index/index",
          "text": "首页",
          // "iconPath": "./images/img/book.png",
          // "selectedIconPath": "./images/img/book-active.png"
        },
        {
          "pagePath": "pages/show/index",
          "text": "首页",
          // "iconPath": "./images/img/book.png",
          // "selectedIconPath": "./images/img/book-active.png"
        },
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
        <Show></Show>
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
