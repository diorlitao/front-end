// 删除文件
const fs = require('fs')
fs.rmdir('./test01', (err) => {
  if (err) {
    console.log('failure')
    console.log(err)
  } else {
    console.log('ok')
  }
})