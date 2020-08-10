Page({
  data: {
    val: '',
    todos: ['1', '2', '3']
  },
  // 这样的话可以异步添加List数据
  addTodo () {
    this.setData({
      val: '',
      todos: [...this.data.todos, this.data.val]
    })
  },
  onLoad () {
    // 创建摄像头
    this.ctx = wx.createCameraContext()
  },
  takePhoto () {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  startRecord () {
    this.ctx.startRecord({
      success: (res) => {
        console.log('startRecord')
      }
    })
  },
  stopRecord () {
    this.ctx.stopRecord({
      success: (res) => {
        this.setData({
          src: res.tempThumbPath,
          videoSrc: res.tempVideoPath
        })
      }
    })
  },
  error (e) {
    console.log(e.detail)
  }
})