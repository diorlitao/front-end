const fs = require('fs')
fs.unlink('./writefile.txt', (err) => {
  if (err) {
    console.log('failure')
  } else {
    console.log('ok')
  }
})