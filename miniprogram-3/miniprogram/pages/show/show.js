// miniprogram/pages/show.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [],
    page: 0
  },
  // 分页逻辑
  getList (init) {
    wx.showLoading();


    // 每页3个
    // 第一页0-3
    if (init) {
      this.setData({
        page: 0
      })
    }
    const PAGE = 3;
    const offset = this.data.page * PAGE;


    // init是不是初始化,初始化直接渲染,不考虑分页
    let ret = db.collection('doubanbook')
      .orderBy('create_time', 'desc');

    if (this.data.page > 0) {
      ret = ret.skip(offset)
    }

    ret = ret.limit(PAGE).get()
      .then(res => {
        console.log(res);
        if (init) {

          this.setData({
            books: res.data
          })
        } else {
          // 加载下一页
          this.setData({
            books: [...this.data.books, ...res.data]
          })
        }

        wx.hideLoading();
      })

    // db.collection('doubanbook')
    // .orderBy('create_time', 'desc');.get()
    //   .then(res => {
    //     console.log(res);
    //     this.setData({
    //       books: res.data
    //     })
    //   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList(true)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('下拉动作');
    this.getList(true)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 加载下一页
    this.setData({
      page: this.data.page + 1
    }, () => {
      this.getList()
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})