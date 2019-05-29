// 创建文件夹
const fs = require('fs')
fs.mkdir('./test', (err) => {
  console.log(err)
})

// 程序再次运行，创建一个已经存在的文件夹时会报错，