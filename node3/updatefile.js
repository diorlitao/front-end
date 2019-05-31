const fs = require('fs')
fs.appendFile('./writefile.txt', '\n nihao zhongguo', (err) => {
  if (err) {
    console.log('failure')
  } else {
    console.log('ok')
  }
})
// nodejs中写人的内容可以是转义字符，