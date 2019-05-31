const fs = require('fs')

fs.readFile('./writefile.txt', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data.toString('utf8'))
  }
})