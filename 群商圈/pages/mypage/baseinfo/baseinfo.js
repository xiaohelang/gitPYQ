//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      // nickName: "夜幕小草",
      // sex: "男",
      // avatarUrl: "",
      // phoneMob: "13544323774",
      // email: "392783080@qq.com",
      // company: "微革网络",
      // position: "web前端",
      // address: "勤天大厦",
      // resume: "我自信我牛逼"

    }
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  choosePhoto: function () {
    let that = this;
    // app.chooseImage(function (imgUrl) {
    //   that.setData({
    //     // 'userInfo.cover_thumb': imgUrl
    //   })
    // });
    // wx.chooseImage({
    //   count: 1, // 最多可以选择的图片张数，默认9
    //   sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
    //   sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
    //   success: function (res) {
    //     // success
    //     console.log("11");
    //     console.log(res);
    //     that.setData({
    //       'userInfo.avatarUrl': res.tempFilePaths[0]
    //     });
    //   },
    //   fail: function (res) {
    //     // fail
    //   },
    //   complete: function (res) {
    //     // complete
    //   }
    // })
  },

  onShow : function() {
    console.log("app.globalData.userInfo-baseinfo");
    console.log(app.globalData.userInfo);
    var that = this;
    that.setData({
      userInfo: app.globalData.userInfo
    })
    console.log("that.data.userInfo");
    console.log(that.data.userInfo);
  }
})
