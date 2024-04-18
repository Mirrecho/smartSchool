// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'初始数据'
  },
change(){
  console.log(123)
  //普通页面跳转
  // wx.navigateTo({
  //   url: '/pages/find/find',
  // })

  //底部导航页面跳转
  wx.switchTab({
    url: '/pages/logs/logs',
  })
},

//改变初始数据的函数
changemessage(){
  this.setData({
    message:'重置数据'
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})