// pages/haircut/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:null,
    longitude:null,
    searchVal:'',
    bannerList:['https://img.pic88.com/st_preview/400954332.jpg?imageMogr2/quality/100!/thumbnail/640|watermark/3/image/aHR0cHM6Ly9qcy5waWM4OC5jb20vd3d3L2NvbW1vbi9pbWcvcGljODgtd2F0ZXIucG5n/gravity/Center/dissolve/100/dx/0/dy/10/image/aHR0cHM6Ly9qcy5waWM4OC5jb20vd3d3L2NvbW1vbi9pbWcvd2gyMzBiZy5wbmc=/dx/0/dy/25/text/SUTvvJoxMjAyMTAzMTAxMTM3MzIxMjAwNTY=/fill/I0ZGRkZGRg==/fontsize/320/dx/30/dy/30','https://img.pic88.com/st_preview/400102742.jpg?imageMogr2/quality/100!/thumbnail/640|watermark/3/image/aHR0cHM6Ly9qcy5waWM4OC5jb20vd3d3L2NvbW1vbi9pbWcvcGljODgtd2F0ZXIucG5n/gravity/Center/dissolve/100/dx/0/dy/10/image/aHR0cHM6Ly9qcy5waWM4OC5jb20vd3d3L2NvbW1vbi9pbWcvd2gyMzBiZy5wbmc=/dx/0/dy/25/text/SUTvvJoxMjAyMTAzMTMwNzI3NTYxMDIxNjU=/fill/I0ZGRkZGRg==/fontsize/320/dx/30/dy/30','https://img.pic88.com/st_preview/400184421.jpg?imageMogr2/quality/100!/thumbnail/640|watermark/3/image/aHR0cHM6Ly9qcy5waWM4OC5jb20vd3d3L2NvbW1vbi9pbWcvcGljODgtd2F0ZXIucG5n/gravity/Center/dissolve/100/dx/0/dy/10/image/aHR0cHM6Ly9qcy5waWM4OC5jb20vd3d3L2NvbW1vbi9pbWcvd2gyMzBiZy5wbmc=/dx/0/dy/25/text/SUTvvJoxMjAyMTAzMTMwOTQ4NTQxMTc1MjE=/fill/I0ZGRkZGRg==/fontsize/320/dx/30/dy/30']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.showLoading({
      title: '正在加载中···',
      mask:true
    }),
    setTimeout(function(){wx.hideLoading()},3000),
    
    wx.getLocation({
      isHighAccuracy: true,
      success(res){
        console.log(res,"定位信息")
        that.setData({
          latitude:res.latitude,
          longitude:res.longitude,
        })
      }
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
    // 跳转搜索页面
    wx.navigateTo({
      url: '../search/index',
    })
  },
  /**
   * 跳转地图找店
   */
  goMap(){
    wx.navigateTo({
      url: '../mapSearch/index',
    })
  },
  /**
   * 跳转取号页面
   */
  goStore(){
    wx.navigateTo({
      url: '../store/index'
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