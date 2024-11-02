const app = getApp()
var is_login=0
let list=''
Page({
  data: {
    item: [{
    }],

  },
  onShow() {
    wx.request({
      url: 'http://127.0.0.1:3000/getcoupon/a',
      success:function(res){
        console.log(res)
        list=res.data
      } ,
      fail:function(){
        wx.showToast({
          icon: "none",
          title: '未登录，请返回主页登录',
        })
      }
    }),
      this.setData({
        item: list,
      })
  }
})