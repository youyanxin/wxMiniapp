// app.js
const app = getApp();
//const { getOpenId } = app.require('api/login')
import { getOpenId } from 'api/login';
App({
  require: function ($uri) {
    return require($uri);
  },
  onLaunch() {
    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        wx.hideLoading({
          success: (res) => { },
        })
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          getOpenId(res.code, result => {
            console.log(result)
            let openId = result.openid;
            let unionId = result.unionId;
            let session_key = result.session_key;

            wx.setStorageSync('openId', openId);
            wx.setStorageSync('unionId', unionId);
            wx.setStorageSync('session_key', session_key);
            console.log('openId======='+openId);
            console.log('unionId======='+unionId);
            console.log('session_key========'+session_key);
          })
        }
      },
      fail:function(err){
        console.log(err)
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
