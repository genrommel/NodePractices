const fs = require('node:fs')

// FORMA SÍNCRONA DE LEER ARCHIVOS
// console.log('reading the first FIle')
// const text = fs.readFileSync('./file.txt', 'utf-8')
// console.log(text)

// FORMA ASINCRONA DE LEER ARCHIVOS
console.log('reading the first FIle')
fs.readFile('./file.txt', 'utf-8', (err, text) => {
  console.log(text)
})

console.log('Doing things while the file is being read')

console.log('reading the Second file')
fs.readFile('./file2.txt', 'utf-8', (err, text) => {
  console.log(text)
})
