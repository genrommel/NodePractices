const os = require('node:os') // ya no es recomendable invocar al modulo por su mismo nombre
console.log('Operating System : ')
console.log('-------------------------')
console.log('Operating System name', os.platform())
console.log('version: ', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUs ', (os.cpus()).length)
console.log('Memoria libre', os.freemem() / 1024 / 1024)
console.log('Memoria Total', os.totalmem() / 1024 / 1024 / 1024)

console.log('uptime', os.uptime() / 60 / 60)
