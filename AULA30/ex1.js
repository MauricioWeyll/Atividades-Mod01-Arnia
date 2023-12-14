const io = require("..//Io/io")

// Escreva uma função chamada somarValores que recebe um
// array de números e retorna a soma de todos os valores do array
// utilizando a função reduce.
// ❖ Exemplo de uso:
// const numeros = [1, 2, 3, 4, 5]
// const resultado = somarValores(numeros)
// console.log(resultado) // Output: 15


function somarValores() {
    return numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
    }

const numeros = [2, 4, 6, 8, 10]
const resultado = somarValores(numeros)
io.write(resultado)
