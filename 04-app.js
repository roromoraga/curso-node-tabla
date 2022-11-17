const { createFile } = require('./helpers/multiply')
const argv = require('./config/yargs')
const color = require('colors')

console.clear()
console.log(argv)

createFile( argv.b, argv.l )
    .then( nombreArchivo => console.log(nombreArchivo.blue + ' creado...'))
    .catch( err => console.log(err.red))