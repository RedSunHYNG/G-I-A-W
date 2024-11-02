const app = getApp()
var is_login=0
let uploadFileUrls=''
let uploadName=''
Page({
  data: {
    imgUrl: '',
    tempFilePath: null,
    upname:null
  },
  uploadFileUrl: null,
  onShow() {
    wx.request({
      url: 'http://127.0.0.1:3000/login/credit',
      data: {
        token: app.globalData.token
      },
      success:function(res){
        uploadFileUrls = res.data[0].image
        uploadName =res.data[0].name
        is_login = 1
        console.log('传递数据',res,uploadFileUrls,uploadName)
      },
      fail:function(){
        wx.showToast({
          icon: "none",
          title: '未登录无法使用，请返回主页登录',
        })
      }
    })
    this.setData({
      imgUrl: uploadFileUrls,
      upname:uploadName
    })
  },
  changeImg: function () {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: res => {
        var tempFilePath = res.tempFiles[0].tempFilePath
        this.setData({
          tempFilePath: tempFilePath,
          imgUrl: tempFilePath
        })
      }
    })
  },
  upload_name: function () {
    if(is_login==1){
      wx.request({
        url: 'http://127.0.0.1:3000/upload/upload_name', 
        method:'POST',
        data:this.data,
        success: (res) => {
          console.log('name:',this.data,res)
        }
      })
    }else{
        wx.showToast({
          icon: "none",
          title: '未登录无法使用，请返回主页登录',
        })
    }
  },
  upload_image: function(){
    console.log(this.data.tempFilePath)
    if(is_login==1){
    wx.uploadFile({
      filePath: this.data.tempFilePath,
      name: 'image',
      url: 'http://localhost:3000/upload/upload',
      success: res => {
        this.uploadFileUrl = res
        console.log('上传成功',this.uploadFileUrl)
      }
    })
  }else{
    wx.showToast({
      icon: "none",
      title: '未登录无法使用，请返回主页登录',
    })
  }
  },
  null:function(){

  }
})