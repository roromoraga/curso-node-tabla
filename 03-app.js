const { createFile } = require('./helpers/multiply')
const argv = require('yargs')

argv.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true
})
.check( (argv, options) => {
    if (isNaN(argv.b)) {
        throw 'La base tiene que ser un número'
    }

    return true
})
.argv

console.clear()

console.log(argv)

console.log('base yargs: ', argv.base)

createFile( base )
    .then(filename => console.log(filename))
    .catch(err => console.log(err))
    