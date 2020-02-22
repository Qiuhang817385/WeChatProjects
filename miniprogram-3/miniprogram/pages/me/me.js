// miniprogram/pages/me/me.js
// 获取全局对象
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 无论vue获取微信小程序,都这么做,初始的时候从本地存储当中获取
    userInfo: wx.getStorageSync('userinfo') || {}
  },
  addBook (isbn) {
    // 调用云函数
    wx.cloud.callFunction({
      // 调用了爬虫函数
      name: 'douban',
      // data是参数,传过来要查的码
      data: { isbn },
      success: ({ result }) => {
        console.log(result)

        result.isbn = isbn;
        result.userInfo = this.userInfo;

        db.collection('doubanbook').add({
          data: result,
          success (add) {
            // 会返回一个id,如果返回成功
            if (add._id) {

              wx.showModal({
                title: '添加成功',
                content: `《${result.title}》添加成功`,
              })

            }
          }
        })

      }
    })


  },

  scanCode () {
    wx.scanCode({
      success: (res) => {
        if (res.result) {
          console.log(res.result)
          // 这个函数内部会调用云函数,云函数内部会调用爬虫
          this.addBook(res.result)
          // this.addBook(res.result)
        }
      }
    })
  },
  onGetUserinfo (e) {
    console.log(e)
    // e.detail只有一些基本的信息
    let userInfo = e.detail.userInfo;
    // 调用云函数获取openid
    wx.cloud.callFunction({
      // 需调用的云函数名
      name: 'login',
      // 传给云函数的参数
      // data: {
      //   a: 12,
      //   b: 19,
      // },
      // 成功回调
      complete: (res) => {
        // 为用户添加一些信息
        userInfo.openid = res.result.openid
        this.setData({
          userInfo
        })
        // 写入本地缓存
        wx.setStorageSync('userinfo', userInfo)
      }
    })

  }
})