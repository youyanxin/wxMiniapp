// pages/mapSearch/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:'',
    latitude:'',
    scale:14,
    markers:'',
    controls: [{
      id: 1,
      iconPath: '../../images/controls.png',
      position: {
        left: 15,
        top: 260 - 50,
        width: 40,
        height: 40
      },
      clickable: true
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.getLocation({
      // type:'wgs84',
      type:'gcj02',
      success:function(res){
        that.setData({
          latitude:res.latitude,
          longitude:res.longitude
        })
      },
      fail(err){
        console.log('err',err)
      },
    })
  },

  /**
   * controltap
   */
  controltap(){
    var that = this;
    if (e.controlId == 1) {
      that.setData({
        latitude: this.data.latitude,
        longitude: this.data.longitude,
        scale: 14
      })
    }
  },
  /**
   * markertap
   */
  markertap(e){
    var lat = Number(e.currentTarget.dataset.latitude);
    var lon = Number(e.currentTarget.dataset.longitude);
    var bankName = e.currentTarget.dataset.bankname;
    console.log(lat);
    console.log(lon);
    wx.openLocation({
      type: 'gcj02',
      latitude: lat,
      longitude: lon,
      name: bankName,
      scale: 28
    })
  },
  /**
   * regionchange
   */
  regionchange(){

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