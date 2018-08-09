const app = getApp()
Page({
  radioChange: function (e) {
    var incResp = parseInt(e.detail.value)
    app.globalData.responsibility += incResp
    console.log(app.globalData.agility)
    console.log(app.globalData.patience)
    console.log(app.globalData.personality)
    console.log(app.globalData.kindness)
    console.log(app.globalData.responsibility)
    wx.redirectTo({
      url: '../q3/q3'
    })
  },
})