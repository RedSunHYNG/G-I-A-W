const app = getApp()
var is_login=0
let uploadFileUrls=''
let uploadName=''
let result=''
Page({
  data: {
    imgUrl:'',
    name: '',
    list: [{
      
    }]
  },
  onShow() {
    wx.request({
      url: 'http://127.0.0.1:3000/login/credit',
      data: {
        token: app.globalData.token
      },
      success:function(res){
        uploadFileUrls = res.data[0].image
        uploadName = res.data[0].name
        is_login = 1
        console.log('传递数据',res,uploadFileUrls)
      },
      fail:function(){
        wx.showToast({
          icon: "none",
          title: '未登录，请返回主页登录',
        })
      }
    })
    this.setData({
      imgUrl: uploadFileUrls,
      name: uploadName
    })
    if(is_login==1){
      wx.request({
        url: 'http://127.0.0.1:3000/getbywayinfo/a',
        success:function(res){
          result = res.data;
    //      console.log(result)
        },
        fail:function(){
          wx.showToast({
            icon: "none",
            title: '未登录，请返回主页登录',
          })
        }  
      })
      this.setData({
        list: result
      })
      console.log(this.data.list)
    }
  },
  delete:function(e){
    console.log(e.currentTarget.dataset)
    var id = e.currentTarget.dataset
    wx.request({
      url: 'http://127.0.0.1:3000/upload/deletebyway',
      data: id ,
      method:'POST',
      success:function(res){
        wx.showToast({
          title: '提交成功',
        })
      }
    })
  }
})