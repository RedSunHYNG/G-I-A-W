// community.js
var randomBgIndex=Math.round(Math.random() * 9);
Page({
  data:{
    images:randomBgIndex,
    infoList: [], 
  },
  onShow() {
    randomBgIndex=Math.round(Math.random() * 9);
    this.setData({
      images:randomBgIndex
    })
    console.log(this.data.images)
  },
  listData: {
    page: 1, // 默认请求第1页的数据
    pageSize: 10, // 默认每页请求10条数据
    total: 0 // 数据总数，默认为0
  },
  isLoading: false, // 当前是否正在加载数据
  getinfoList: function (cb) {
    this.isLoading = true
    // 请求数据之前，展示加载效果，接口调用结束后，停止加载效果
    wx.showLoading({
      title: '数据加载中...'
    })
    wx.request({
      url: 'http://127.0.0.1:3000/getbywayinfo/b',
      method: 'GET',
      data: {
        page: this.listData.page,
        pageSize: this.listData.pageSize
      },
      success: res => {
        console.log(res)
        this.setData({
          infoList: [...this.data.infoList, ...res.data],
        })
        this.listData.total = res.header['X-Total-Count'] - 0
      },
      complete: () => {
        // 隐藏加载效果
        wx.hideLoading()
        this.isLoading = false
        cb && cb()
      }
    })
  },
  onLoad() {
    this.getinfoList()
  },
  onReachBottom: function () {
    if (this.listData.page * this.listData.pageSize >= this.listData.total) {
      // 没有下一页的数据了
      return wx.showToast({
        title: '数据加载完毕！',
        icon: 'none'
      })
    }
    if (this.isLoading) {
      return
    }
    // 页码自增
    ++this.listData.page
    // 请求下一页数据
    this.getinfoList()
  },
  onPullDownRefresh: function () {
    // 需要重置的数据
    this.setData({
      infoList: []
    })
    this.listData.page = 1
    this.listData.total = 0
    // 重新发起数据请求
    this.getinfoList(() => {
      wx.stopPullDownRefresh()
    })
  }
})