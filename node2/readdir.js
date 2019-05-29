//使用内部模块
const fs = require('fs')
// sync  使用try catch 来捕获异常，使后面的代码可以执行到
try {
  const dirs = fs.readdirSync('./')
  console.log(dirs)
} catch (err) {
  console.log(err)
}
console.log('end1')

// !sync
const dirss = fs.readdir('./node', (err, data) => {
  console.log(err)
  console.log(err.errno)
  console.log(data)
  // 对错误对象进行判断
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})
console.log('end2')

// 错误回调优先，回调函数的第一个参数是错误对象，默认为null,如果出现错误，是一个错误对象