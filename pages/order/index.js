// pages/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curTab:3,
    tabList:[{
      name:'待服务',
      value:0
    },{
      name:'待支付',
      value:1
    },{
      name:'已完成',
      value:2
    },{
      name:'已取消/过号',
      value:3
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载中···',
      mask:true
    })
    setTimeout(function(){wx.hideLoading()},3000)
  },

  /**
   * 切换tab
   */
  changeTab(e){
    this.setData({
      curTab:e.currentTarget.dataset.value
    })
    // 调用接口
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})