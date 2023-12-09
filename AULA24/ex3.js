const io = require("../Io/io")

/* 
Escreva uma função que recebe, por parâmetro, dois valores X e Z e
calcula e retorna Xz

(X elevado à Z). (sem utilizar funções ou operadores

de potência prontos) 
*/

let potencia = (x, z) => {
    let resultado = x ** z
    return resultado
}

let resultadoPotencia = potencia(5, 2)

io.write(resultadoPotencia)