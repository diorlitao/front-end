const fs = require('fs')
fs.appendFile('./writefile.txt', 'nihao zhongguo', (err) => {
  if (err) {
    console.log('failure')
  } else {
    console.log('ok')
  }
})