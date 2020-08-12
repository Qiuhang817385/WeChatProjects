// //index.js
// //获取应用实例
const app = getApp()
Page({
  data: {
    // 这里相当于一个变量
    age: 17,
    val: '',
    todos: ['吃饭', '睡觉', '学习'],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  onLoad: function () {

    // 获取网络当中的数据
    console.log('初始化生命周期')
    // wx.request({
    //   url: 'http://localhost:3000/test',
    //   success: res => {
    //     console.log(res)
    //   }
    // })
    console.log('app.globalData', app.globalData)
    // 是否可以获取
    console.log('this.data.canIUse', this.data.canIUse)
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    console.log('app', app)
    console.log(' app.userInfoReadyCallback', app.userInfoReadyCallback)
    // userInfoReadyCallback
    // 这波操作可以的
    // app.userInfoReadyCallback = res => {
    //   console.log('res', res)
    //   this.setData({
    //     userInfo: res.userInfo,
    //     hasUserInfo: true
    //   })
    // }


    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  // 获取用户信息,这个是比较全面的
  getUserInfo: function (e) {
    console.log('e', e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 图片的跳转
  bindViewTap: function () {
    wx.navigateTo({
      // url: '../logs/logs'
      // fail url "pages/index/http://www.baidu.com" is not in app.json
      url: '../goods/goods'
    })
  },
  handleInput (e) {
    this.setData({
      val: e.detail.value,
    })
    console.log('====================================');
    console.log(e);
    console.log('====================================');
  },
  addTodo () {
    console.log('点击了添加');

    this.setData({
      val: '',
      todos: [...this.data.todos, this.data.val]
    })
  },
  toast () {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 3000
    })
  },

})