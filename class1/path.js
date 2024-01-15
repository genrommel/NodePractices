const path = require('node:path')

// barra separadora de carpetas segun SO
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('./content', 'subfolder', 'lastFile.txt')
console.log(filePath)

// te da el nombre del fichero
const base = path.basename(filePath)
console.log(base)

// ahora sin la extension del fichero

const baseWithOutExntesion = path.basename(filePath, path.extname(base))
console.log(baseWithOutExntesion)

const extension = path.extname('image.jpg')
console.log(extension)
