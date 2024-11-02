const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

var sql = require('../config/mysql.js')
app.use(bodyParser.json())

// 注意：小程序端的appid必须使用真实账号，如果使用测试账号，会出现login code错误
const wx = {
  appid: '',
  secret: ''
}

var db = {
  session: {},
  user: {}
}
var codeid=null;

app.post('/login', (req, res) => {
  console.log('login code: ' + req.body.code)
  var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + wx.appid + '&secret=' + wx.secret + '&js_code=' + req.body.code + '&grant_type=authorization_code'
  request(url, (err, response, body) => {
    console.log('session: ' + body)
    var session = JSON.parse(body)
    codeid = session.openid  
    global.codeid =session.openid  
    sql.query("select codeid from user_1206 where codeid=?", codeid, (err, results) => {
//      console.log(err, results)
      if (results.length !== 1) {
        sql.query("insert into user_1206(codeid) values(?)", codeid, (err, results) => {
          console.log('已执行上传', err, results)
        })
      }
      if (results.length === 1) {
        console.log("已有账号")
        if (session.openid) {
          var token = 'token_' + new Date().getTime()
          db.session[token] = session
          if (!db.user[session.openid]) {
            db.user[session.openid] = {
              credit: 100
            }
          }
        }
        res.json({
          token: token
        })
      }
    })
  })
})


app.get('/checklogin', (req, res) => {
  var session = db.session[req.query.token]
  console.log('checklogin: ', session)
  // 将用户是否已经登录的布尔值返回给客户端
  res.json({
    is_login: session !== undefined
  })
})

app.get('/credit', (req, res) => {
  var session = db.session[req.query.token]
  if (session && db.user[session.openid]) {
    sql.query("select * from user_1206 where codeid=?", codeid, (err, results) => {
      console.log(err, results)
      res.json(results)
    })
//    console.log(session.openid)
  }
  else {
    res.json({
      err: '用户不存在，或未登录。'
    })
  }
}),

module.exports = app;