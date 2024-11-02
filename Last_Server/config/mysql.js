var mysql = require('mysql')
var connection = mysql.createConnection({
    host:'localhost',
    port:'',
    user:'',
    password:'',
    database:'use_server',
    multipleStatements:true
});
connection.connect();
module.exports = connection