const app = getApp()
Page({
  radioChange: function (e) {
    switch (e.detail.value) {
      case 'a':
        app.globalData.agility += 6
        break;
      case 'b':
        app.globalData.responsibility += 6
        break;
      case 'c':
        app.globalData.personality += 6
        break;
      case 'd':
        app.globalData.kindness += 6
        break;
      case 'e':
        app.globalData.patience += 6
        break;
      default:
        console.warn("no answer 8")
    }

    console.log(app.globalData.agility)
    console.log(app.globalData.patience)
    console.log(app.globalData.personality)
    console.log(app.globalData.kindness)
    console.log(app.globalData.responsibility)
    wx.redirectTo({
      url: '../q9/q9'
    })
  },
})