var mysql = require('mysql')
var connection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'12345678',
    database:'use_server',
    multipleStatements:true
});
connection.connect();
module.exports = connection