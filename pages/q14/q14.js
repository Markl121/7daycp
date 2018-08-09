const app = getApp()
Page({
  radioChange: function (e) {
    app.globalData.kindness += parseInt(e.detail.value)
    console.log(app.globalData.agility)
    console.log(app.globalData.patience)
    console.log(app.globalData.personality)
    console.log(app.globalData.kindness)
    console.log(app.globalData.responsibility)
    wx.redirectTo({
      url: '../q15/q15'
    })
  },
})