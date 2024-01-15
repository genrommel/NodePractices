// process

// console.log(process.argv);

// controlar el proceso y su salida

// process.exit(0) // 0 todo bien master, el proceso termina   --- 1 algo salio mal, sal antes que se queme todo

// // ´podemos controlar eventos del proceso

// process.on('exit', () => {
//     // limpiar los recursos o consola
// })

// current working directory  ===> nos dice desde que carpeta estamos ejecutando el proceso
console.log(process.cwd())

// platform

console.log(process.env.ELPEPE)
