const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

function showDescModal(msg,title,callback) {
  if(typeof title=='undefined'){
    title='';
  }
  else if(typeof title=='function'){
    callback = title;
    title='';
  }
  wx.showModal({
    title: title,
    content: msg,
    showCancel: false,
    confirmText:"确定",//默认是“确定”
    confirmColor: '#1989fa',//确定文字的颜色
    success: callback
  })
}

module.exports = {
  formatTime,
  showDescModal
}
