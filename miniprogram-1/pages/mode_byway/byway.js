// pages/mode_byway/byway.js
Page({
  data:{
    opinion:null,
  },
     submit:function () {
      wx.request({
        url: 'http://127.0.0.1:3000/upload/upload_byway',
        data: this.data,
        method:'POST',
        success:function(res){
          wx.showToast({
            title: '提交成功',
          })
        },
        fail:function(){
          wx.showToast({
            icon: "none",
            title: '出现未知问题',
          })
        }
      })
    }
  })