import { readFile } from 'node:fs/promises'
// const { promisify } = require('node:util');

// ESTA FORMA ES MAS RAPIDA - ESTA LEYENDO EN PARALELO LOS ARCHIVOS, UNA VEZ TERMINADOS DE LEER CONTINUA CON LO QUE TIENE QUE HACER

Promise.all([
  readFile('./file2.txt', 'utf-8'),
  readFile('./file.txt', 'utf-8')
]).then(([text, secondText]) => {
  console.log('Primer texto : ', text),
  console.log('Segundo texto: ', secondText)
})

// // IIFE     Immediatly Invoked Function Expression
// (
//   async () => {
//     console.log('reading the first FIle')
//     const text = await readFile('./file.txt', 'utf-8')
//         .then(text => {
//             console.log('Primer texto: ', text )
//         })

//     console.log('Doing things while the file is being read')

//     console.log('reading the Second file')
//     const secondText = await readFile('./file2.txt', 'utf-8')
//         .then(text => {
//             console.log('Segundo texto: ', text)
//         })
//     }
// )()
