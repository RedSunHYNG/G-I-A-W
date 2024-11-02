var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//静态资源调用？
app.use(express.static('./public'));
app.use(express.static(path.join(__dirname, 'public')));
// cors组件？
var cors = require('cors');
app.use(cors());
//

//
var upload = require('./upload');
app.use('/upload', upload);
//
var ubywayinfo = require('./routes/bywayinfo');
app.use('/getbywayinfo', ubywayinfo);
//
var ucoupon = require('./routes/coupon');
app.use('/getcoupon', ucoupon);
//微信登录一体化
var uLogin = require('./routes/login');
app.use('/login', uLogin);
//-----:商店信息获取


let fs = require('fs');
var data_a ='./store_data.json'
// 读取JSON数据
let jsonStr = fs.readFileSync(data_a, {
  encoding: 'utf8'
});

let data = JSON.parse(jsonStr);

app.get('/store_data', (req, res) => {
  let [ ...arr ] = data
  let start = (req.query.page - 1) * req.query.pageSize;
  res.setHeader('X-Total-Count', data.length);
  res.send(arr.splice(start, req.query.pageSize));
});


//-----

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

//-----


//-----