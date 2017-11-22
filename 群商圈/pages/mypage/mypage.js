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
      // phone: "13544323774",
      // mailBox: "392783080@qq.com",
      // company: "微革网络",
      // job: "web前端",
      // address: "勤天大厦",
      // summay: "我自信我牛逼"
    }
  },
  //事件处理函数
  bindViewTap: function () {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
    wx.switchTab({
      url: '../buypage/buypage'
    })
  },
  onLoad: function () {
    var that = this;

    that.setData({
      userInfo: app.globalData.userInfo
    })
    //调用应用实例的方法获取全局数据
    /*
    app.getUserInfo(function (userInfo) {
      //更新数据
      let data = {
        'userInfo.nickName': userInfo.nickName,
        'userInfo.sex': userInfo.sex,
        'userInfo.avatarUrl': userInfo.avatarUrl
      };
      // that.setData(data);
      that.setData({
        userInfo: userInfo
      })
    });
    */
    // wx.request({
    //   url: 'https://test.ueker.cn/qunshangquan_linhoude/user/getUserDetailByOpenId.action',
    //   method: "POST",
    //   header: {
    //     // 'content-type': 'application/json'
    //     'content-type': 'application/x-www-form-urlencoded'
    //   },
    //   data: {
    //     data: JSON.stringify({
    //       openID: app.globalData.openId,
    //       sessionKey: app.globalData.sessionKey
    //     })
    //   },

    //   success: function (ress) {
    //     console.log("用户详情");
    //     console.log(ress);

    //     let userInfo = ress.data.resultData.user;
    //     console.log(" userInfo.nickname");
    //     // console.log(userInfo.nickname);
    //     // let data = {
    //     //   'userInfo.nickName': userInfo.nickname,
    //     //   'userInfo.sex': userInfo.sex,
    //     //   'userInfo.avatarUrl': userInfo.avatarUrl,
    //     //   'userInfo.phone': userInfo.phoneMob,
    //     // };
    //     // that.setData({
    //     //   'userInfo.nickName': userInfo.nickname,
    //     //   'userInfo.sex': userInfo.sex,
    //     //   'userInfo.avatarUrl': userInfo.avatar,
    //     //   'userInfo.phone': userInfo.phoneMob,
    //     //   'userInfo.company': userInfo.company,
    //     // });



    //     console.log(ress);
    //   }
    // })
  },
  onShow: function () {
    var that = this;
    that.setData({
      userInfo: app.globalData.userInfo
    })
  }
})
