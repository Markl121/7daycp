const app = getApp()
Page({
  radioChange: function (e) {
    var incPatient = parseInt(e.detail.value)
    app.globalData.patience += incPatient
    console.log(app.globalData.agility)
    console.log(app.globalData.patience)
    console.log(app.globalData.personality)
    console.log(app.globalData.kindness)
    console.log(app.globalData.responsibility)
    wx.redirectTo({
      url: '../q2/q2'
    })
  },
})