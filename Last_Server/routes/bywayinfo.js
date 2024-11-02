var express = require('express');
var router = express.Router();
var sql = require('../config/mysql.js')
/* GET home page. */
router.get('/a', function (req, res, next) {
  sql.query('select * from byway_1206 WHERE codeid=?', global.codeid, function (err, data) {
    console.log(err)
    //    console.log(data)
    res.send(data);
  })
});


let arrs = []
router.get('/b', function (req, res, next) {
  
  sql.query('select * from byway_1206', function (err, data_a) {
    var arr = JSON.stringify(data_a)
    var ars =JSON.parse(arr)
    //console.log(ars,ar)
    console.log(ars.length)
    for (let n = 0; n < ars.length; n++) {
      sql.query('select * from user_1206 WHERE codeid=?', data_a[n].codeid, function (err, data_) {
      //console.log(ars[n].codeid,data_[0].name)
      ars[n].codeid=data_[0].name
      arrs.push(ars[n]);
      //console.log(ars[n].codeid,data_[0].name,ar)
      })
  
    }
  if(arrs){
  let [ ...aarr ] = arrs
  let start = (req.query.page - 1) * req.query.pageSize;
  res.setHeader('X-Total-Count', arrs.length);
  res.send(aarr.splice(start, req.query.pageSize));
  }else{
    res.send(arrs)
  }
  })
});


module.exports = router;
