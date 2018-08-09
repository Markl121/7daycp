const app = getApp()
Page({
  radioChange: function (e) {
    switch (e.detail.value) {
      case 'a':
        app.globalData.personality += 6
        break;
      case 'b':
        app.globalData.agility += 4
        break;
      case 'c':
        app.globalData.kindness += 4
        break;
      case 'd':
        app.globalData.patience += 4
        break;
      case 'e':
        app.globalData.responsibility += 5
        break;
      default:
        console.warn("no answer 4")
    }

    console.log(app.globalData.agility)
    console.log(app.globalData.patience)
    console.log(app.globalData.personality)
    console.log(app.globalData.kindness)
    console.log(app.globalData.responsibility)
    wx.redirectTo({
      url: '../q5/q5'
    })
  },
})