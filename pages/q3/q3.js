const app = getApp()
Page({
  radioChange: function (e) {
    var incPatient = parseInt(e.detail.value)

    switch (e.detail.value) {
      case 'a':
        app.globalData.kindness += 6
        break;
      case 'b':
        app.globalData.personality += 6
        break;
      case 'c':
        app.globalData.patience += 6
        break;
      case 'd':
        app.globalData.agility += 6
        break;
      case 'e':
        app.globalData.responsibility += 6
        break;
      default:
        console.warn("no answer 3")
    }

    console.log(app.globalData.agility)
    console.log(app.globalData.patience)
    console.log(app.globalData.personality)
    console.log(app.globalData.kindness)
    console.log(app.globalData.responsibility)
    wx.redirectTo({
      url: '../q4/q4'
    })
  },
})