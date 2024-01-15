const fs = require('node:fs')

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error while reading file', err)
    return
  }
  files.forEach(file => {
    console.log(file)
  })
})
