const fs = require('node:fs') // a partir de node 16 se recomienda usar 'node:module'

// node.js es monohilo .. solo tiene un proceso

// sincrono
const stats = fs.statSync('./file.txt')

console.log(
  stats.isFile(), // si es un fichero
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // si es un enlace simbólico
  stats.size
)
