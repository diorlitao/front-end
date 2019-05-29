// 1.创建一个模块就是创建一个文件
// 2.导出一个模块
let nodeobj = {
  sayhello() {
    console.log('hello nodejs')
  }
}

module.exports = nodeobj