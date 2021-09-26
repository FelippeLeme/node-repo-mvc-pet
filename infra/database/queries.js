const conexao = require('./conexao')

const executeQuery = (query, parametros = '') => {
    return new Promise((resolve, reject) => {
        conexao.query(query, parametros, (errros, resultados, campos) => {
            if (erros) {
                reject(erros)
            } else {
                resolve(resultados)
            }
        })
    })
}

module.exports = executeQuery