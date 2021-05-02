// pages/evaluate/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    norTabIdx:5,
    typeList:[{
      name:'发型效果好',
      value:1,
      num:382
    },{
      name:'认真沟通',
      value:2,
      num:276
    },{
      name:'环境卫生好',
      value:3,
      num:221
    },{
      name:'主动接待',
      value:4,
      num:212
    }],
    verList:[{
      name:'全部',
      value:5,
      num:6380
    },{
      name:'有图',
      value:6,
      num:87
    },{
      name:'满意',
      value:7,
      num:6237
    },{
      name:'一般',
      value:8,
      num:212
    },{
      name:'不满意',
      value:9,
      num:212
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 修改选中tab
   */
  changeNorTabIndex(e){
    this.setData({
      norTabIdx:e.currentTarget.dataset.idx
    })
  },

  /**
   * 图片点击查看
   */
  previewImage:function(e){
    var src = e.currentTarget.dataset.src;//获取data-src
    var imgList = e.currentTarget.dataset.list;//获取data-list
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
    },

    /**
     * 展开
     */

     /**
      * 收缩
      */

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