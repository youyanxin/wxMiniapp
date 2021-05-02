// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchVal:'',
    curTab:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      searchVal:options.searchVal
    })
  },

  /**
   * 获取搜索框的值
   */
  getSearchVal(e){
    this.setData({
      searchVal:e.detail.value
    })
  },
  /**
   * 清除搜索框的值
   */
  clear(){
    this.setData({
      searchVal:''
    })
  },
  /**
   * 搜索
   */
  search(){
    // 调用接口
  },

  /**
   * 关闭
   */
  goHaircut(){
    wx.navigateBack({
      delta: 1
    })
  },

  /**
   * 切换tab
   */
  changeTab(e){
    this.setData({
      curTab:e.currentTarget.dataset.index
    })
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