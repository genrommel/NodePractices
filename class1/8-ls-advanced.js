const pc = require('picocolors')
const fs = require('node:fs/promises')
const path = require('node:path')

// // with callback
// fs.readdir('.', (err, files) => {
//     if(err){
//         console.error('Error while reading file', err);
//         return
//     }
//     files.forEach(file => {
//         console.log(file)
//     })
// })

// with promises

const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(pc.red(`No se pudo leer el directorio ${folder}`))
    process.exit(1)
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath)
    } catch {
      console.error(`No se pudo leer el archivo ${filePath}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f' // tipo de archivo
    const fileSize = stats.size // tamaño de archivo
    const fileModified = stats.mtime.toLocaleString() // cuando se modiico el archivo

    return `${fileType}  ${pc.blue(file.padEnd(20))}  ${pc.green(fileSize.toString().padStart(10))} ${pc.yellow(fileModified)} `
  })

  const filesInfo = await Promise.all(filesPromises)
  filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)
