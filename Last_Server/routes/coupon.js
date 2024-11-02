var express = require('express');
var router = express.Router();
var sql = require('../config/mysql.js')
let fs = require('fs');
/* GET home page. */
var data_a ='./store_data.json'
// 读取JSON数据
let jsonStr = fs.readFileSync(data_a, {
  encoding: 'utf8'
});
let data = JSON.parse(jsonStr);
//console.log(data.length)
router.get('/a', function(req, res, next) {
    let arr = []
    if(global.codeid){
        sql.query('select * from coupon_1206 WHERE codeid=?',global.codeid,function(err,data_){
            console.log(err)
         //   console.log(data_.length)
            for (let n=0; n < data_.length; n++) {      
                var id=data_[n].shopid
          //      console.log(id)
                for(let m = 0; m < data.length; m++){
           //       console.log(data[m].id)
                  if(data[m].id == id)  { 
                    arr.push(data[m]);
                  }
            }
          }
          console.log(arr)
            res.send(arr);
          })
    }else{
        res.json("未登录")
    }
 
});




module.exports = router;