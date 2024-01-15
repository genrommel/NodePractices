// common JS   Require import
const { sum } = require('./arithmeticsFunctions')

globalThis.console.log('Hi this is globalThis')

globalThis.console.log((global.Math.random() * 10) + 1)

console.log(sum(5, 6))
