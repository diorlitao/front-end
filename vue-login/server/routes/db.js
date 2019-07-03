// 引入数据库
var mysql = require('mysql');
// 创建连接
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'vuexms'
});

// 暴露连接
module.exports = connection