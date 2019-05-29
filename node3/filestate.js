const fs = require('fs')
fs.stat('./file.txt', (err, state) => {
  if (state.isFile()) {
    console.log('file')
  } else {
    console.log('dir')
  }
})