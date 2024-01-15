const { readFile } = require('node:fs/promises')
// const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile) // con promisify crea la versión de promesa , si es que no se especifica en ('node:/s')
// // IIFE     Immediatly Invoked Function Expression
(
  async () => {
    console.log('reading the first FIle')
    const text = await readFile('./file.txt', 'utf-8')
      .then(text => {
        console.log('Primer texto: ', text)
      })

    console.log('Doing things while the file is being read')

    console.log('reading the Second file')
    const secondText = await readFile('./file2.txt', 'utf-8')
      .then(text => {
        console.log('Segundo texto: ', text)
      })
  }
)()
