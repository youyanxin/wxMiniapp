/**
 * 封装微信的的request
 */
import { WX_API } from '../config/env';
import {showDescModal} from './util';
function request(url, callEvent, data = {}, method = "GET", loading='', header = {'Content-Type': 'application/json'}) {
    if (url.match("^" + WX_API) != WX_API) {
        url = WX_API + (/^\//.test(url) ? url : "/" + url);
    }
    method = method||'GET'
    
    header = header|| {'Content-Type': 'application/json'}
    header['token'] = wx.getStorageSync('token');
    callEvent = callEvent ||{success:function(res){}}
    if(loading){
      wx.showLoading({
        title: loading,
        mask:true
      });  
    }
       
      wx.request({
          url: url+"?t="+new Date().getTime(),
          data: data,
          method: method,
          header: header,
          success: function (res) {
              if (res.data.success) {
                  if (!res.data.success) {
                    console.log(callEvent);
                    if(callEvent.error){
                      callEvent.error.call(this,res.data);
                      return;
                    }
                    showDescModal( res.data.msg || '服务器繁忙，请稍候再试');
                  } else {
                    callEvent.success.call(this,res.data.data)
                  }
              } else {
                
                if(callEvent.error){
                  callEvent.error.call(this,res.errMsg);
                  return;
                }
                showDescModal('服务器繁忙，请稍候再试');
              }

          },
          fail: function (err) {
            showDescModal( '网络请求超时');
          },
          complete: function (res) {
           
              wx.hideLoading();
          }
      })
 
}
/**
 * post json
 */
function postByJSON(url, callEvent, data = {},title='') {
  return request(url,callEvent, data, 'POST', title);
}
/**
 * post 
 */
function post(url, callEvent, data = {},title='') {
  return request(url, callEvent, data, 'POST',title,  { "content-type": "application/x-www-form-urlencoded"});
}

/**
 * get
 */
function get(url, callEvent, data = {},title='') {
  return request(url, callEvent, data, null,title, { "content-type": "application/x-www-form-urlencoded"});
}
function getByJSON(url, callEvent, data = {},title='') {
  return request(url, callEvent, data,null,title);
}


module.exports ={ request, post, get, postByJSON, getByJSON}
