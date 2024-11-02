// index.js
const app = getApp()
let imgUrl = ''
let uploadFileUrl=''
let uName=''
let uploadName=''
let uAdmin=''
let uploadAdmin=''
Page({
  data: {
    name:uName,
    avatarUrl:imgUrl,
    admin:uAdmin
  },
  //
  onShow() {
    this.download()
  },
  download: function () {
      wx.request({
        url: 'http://127.0.0.1:3000/login/credit',
        data: {
          token: app.globalData.token
        },
        success:function(res){
          uploadFileUrl = res.data[0].image
          uploadName =res.data[0].name
          uploadAdmin = res.data[0].admin
          console.log('传递数据',res,uploadFileUrl,uploadName,uploadAdmin)
        },
        fail:function(){
          console.log("获取失败")
        },
      })
    if (!uploadFileUrl) {
      imgUrl='../image/avatar.png'
        this.setData({
          avatarUrl:imgUrl
        })
      console.log('返还原型头像',imgUrl)
    }else{
      imgUrl = uploadFileUrl
      this.setData({
        avatarUrl:imgUrl
      })
      console.log('返还服务器头像',imgUrl)
    }
    if (!uploadName) {
        this.setData({
          name:'游客'
        })
      console.log('返还原形名字',uName)
    }else{
      uName = uploadName
      this.setData({
        name:uName
      })
      console.log('返还服务器名字',uName)
    }
    if (uploadAdmin==1) {
        this.setData({
        admin:'代肝打手'
        })
    }else{
      this.setData({
        admin:'无'
      })
    }
  }
})
