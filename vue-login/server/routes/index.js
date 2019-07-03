var express = require('express');
var router = express.Router();
const conn = require('./db')

conn.connect(() => {
  `数据库连接成功`
})
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.post('/checklogin', (req, res) => {
  console.log('worked')
  let {
    username,
    password
  } = req.body.params
  const sqlStr = `select * from users where username='${username}' and password='${password}'`
  console.log(sqlStr)
  conn.query(sqlStr, (err, data) => {
    if (err) {
      throw err
    } else {
      res.send(data)
    }
  })
})
module.exports = router;