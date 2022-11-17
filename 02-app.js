const { createFile }= require('./helpers/multiply')

// const [, , arg3] = process.argv
const [, , arg3 = 'base=12'] = process.argv
const [, base] = arg3.split("=")

console.log(arg3)
console.log(base)

createFile( base )
    .then(filename => console.log(filename, 'creado'))
    .catch(err => console.log(err))