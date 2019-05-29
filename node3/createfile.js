const fs = require('fs')
fs.writeFile('./writefile.txt', 'Hello Word', (err) => {
  if (err) {
    console.log('failure')
  } else {
    console.log('ok')
  }
})