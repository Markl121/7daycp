const app = getApp()
Page({
  radioChange: function (e) {
    switch (e.detail.value) {
      case 'a':
        app.globalData.personality += 5
        break;
      case 'b':
        app.globalData.kindness += 5
        break;
      case 'c':
        app.globalData.responsibility += 5
        break;
      case 'd':
        app.globalData.agility += 5
        break;
      default:
        console.warn("no answer 9")
    }

    console.log(app.globalData.agility)
    console.log(app.globalData.patience)
    console.log(app.globalData.personality)
    console.log(app.globalData.kindness)
    console.log(app.globalData.responsibility)
    wx.redirectTo({
      url: '../q10/q10'
    })
  },
})