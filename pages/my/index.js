// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    canIUseOpenData: false, // 尝试获取用户信息改为false
    funcList:[{
      icon:'../../images/controls.png',
      name:'订单',
      url:'../order/index',
      isTab:1
    },{
      icon:'../../images/controls.png',
      name:'优惠券',
      url:'../coupon/index'
    },{
      icon:'../../images/controls.png',
      name:'邀请好友',
      url:'../inviteFriends/index'
    },{
      icon:'../../images/controls.png',
      name:'历史发型',
      url:'../hisHairstyles/index'
    },{
      icon:'../../images/controls.png',
      name:'个人档案',
      url:'../personalFile/index'
    },{
      icon:'../../images/controls.png',
      name:'剪发日历',
      url:'../haircutCalendar/index'
    }
    // ,{
    //   icon:'../../images/controls.png',
    //   name:'我的收藏',
    //   url:'../favorites/index'
    // },{
    //   icon:'../../images/controls.png',
    //   name:'意见反馈',
    //   url:'../feedback/index'
    // }
    // ,{
    //   icon:'../../images/controls.png',
    //   name:'订阅消息',
    //   url:'../subscNews/index'
    // },
    // {
    //   icon:'../../images/controls.png',
    //   name:'防控标准',
    //   url:'../USC/index'
    // },{
    //   icon:'../../images/controls.png',
    //   name:'通知管理',
    //   url:'../noticeManage/index'
    // },{
    //   icon:'../../images/controls.png',
    //   name:'发型圈子',
    //   url:'../hairstyleCircle/index'
    // },{
    //   icon:'../../images/controls.png',
    //   name:'消息',
    //   url:'../news/index'
    // }
   ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    let userInfoStorage = wx.getStorageSync("userInfo");
    if(userInfoStorage){
      this.setData({
        userInfo: userInfoStorage,
        hasUserInfo: true
      })
    }
  },

  /**
   * 跳转UVIP页面
   */
  goUVIP(){
    wx.navigateTo({
      url: '../UVIP/index'
    })
  },

  /**
   * 跳转页面
   */
  goPage(e){
    var item=e.currentTarget.dataset.item;
    if(item&&item.isTab){
      // 普通页面跳转
      wx.switchTab({
        url: item.url
      })
    }else{
      // 底部页面跳转
      wx.navigateTo({
        url: item.url
      })
    }
  },
  /**
   * 获取用户信息
   */
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    let that = this;
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        console.log("userInfo========="+that.data.userInfo);
      }
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

  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        wx.setStorage({
          data: res.userInfo,
          key: 'userInfo',
        })
      }
    })
  },
  getPhoneNumber: function(e) {   
    console.log(e.detail) 
  },
})