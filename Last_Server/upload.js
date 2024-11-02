const express = require('express')
const formidable = require('formidable')
const path = require('path');
var sql = require('./config/mysql.js')
var app = express()
app.use(express.static('./public'))

 
var downUrl =null;


app.use(express.static('./public'))
app.post('/upload', (req, res) =>{
  var form =new formidable.IncomingForm();
  let uploadDir=path.join(__dirname, './public/upfile')
  form.uploadDir=uploadDir
  form.options.keepExtensions = true;
  form.parse(req,(err,fields,files)=>{
    var a = files.image[0].newFilename
    downUrl = "http://localhost:3000/upfile/"+a;
    console.log(downUrl,a)
    sql.query("update user_1206 SET image=? WHERE codeid=?",[downUrl,global.codeid],(err, results) => {
      console.log(err, results)
    })
    res.json({downUrl})
  })
})
 

app.post('/upload_name', (req, res) =>{
  console.log('name',req.body.upname,global.codeid)
  var upname = req.body.upname
  sql.query("update user_1206 SET name=? WHERE codeid=?",[upname,global.codeid],(err, results) => {
    console.log(err, results)
  })
  res.json({
    err: '已更改名字。'
  })

})

app.post('/upload_byway', (req, res) =>{
  console.log('name',req.body.opinion,global.codeid)
  var info  = req.body.opinion
  sql.query("insert into byway_1206(codeid,info) values(?,?) ",[global.codeid,info],(err, results) => {
    console.log(err, results)
  })
  res.json({
    err: '已提交说说。'
  })

})

app.post('/deletebyway', (req, res) =>{
  console.log('id',req.body.item)
  var id  = req.body.item
  sql.query("delete from byway_1206 where id=?",id,(err, results) => {
    console.log(err, results)
  })
  res.json({
    err: '已删除此说说。'
  })
})

app.post('/add_coupon', (req, res) =>{
  console.log('id',req.body.item)
  var shop  = req.body.item
  sql.query("insert into coupon_1206(codeid,shopid) values(?,?)",[global.codeid,shop],(err, results) => {
    console.log(err, results)
  })
  res.json({
    err: '添加商品。'
  })
})

module.exports = app;
