// 重命名文件夹
const fs = require('fs')
fs.rename('./test', './test01', (err) => {
  if (err) {
    console.log('failure')
  } else {
    console.log('ok')
  }
})