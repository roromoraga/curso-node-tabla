const fileSystem = require('fs')
const colors = require( 'colors' )

const createFile = async( base = 12, listar = false ) => {
    try {
        if (listar) {
            console.log('===================')
            console.log('  Tabla: del ', colors.bgWhite(base).white)
            console.log('===================')
        }

        let out = ''
        let out2 = ''

        for (let i = 1; i <= 10; i++) {
            out += `${base} ${'*'.cyan} ${i} = ${base * i}\n`
            out2 += `${base} * ${i} = ${base * i}\n`
        }

        if (listar)
            console.log(out);

        fileSystem.writeFileSync(`./out/tabla-${base}.txt`, out2)

        return `tabla-${base}.txt`
    } catch (error) {
        throw error
    }
}

module.exports = {
    createFile
}
