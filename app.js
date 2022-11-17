const { createFile } = require('./helpers/multiply')

console.clear()

const base = 10

 createFile( base )
    .then( createFile => console.log(createFile))
    .catch( error => console.log(error))