const io = require("../Io/io")

// Dado o seguinte array de objetos que representa produtos em um
// e-commerce:
// const produtos = [
// { id: 1, nome: 'Camiseta', preco: 29.9 },
// { id: 2, nome: 'Calça', preco: 59.9 },
// { id: 3, nome: 'Tênis', preco: 99.9 }
// ]
// Escreva uma função chamada calcularTotal que recebe esse array de
// produtos e retorna o valor total da compra, somando o preço de cada
// produto.
// ❖ Exemplo de uso:
// const total = calcularTotal(produtos)
// console.log(total) // Output: 189.7

const produtos = [
    { id: 1, nome: 'Camiseta', preco: 29.9 },
    { id: 2, nome: 'Calça', preco: 59.9 },
    { id: 3, nome: 'Tênis', preco: 99.9 }
    ]

function calcularTotal(produtos){
    const soma = produtos.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
    return soma
}

const total = calcularTotal(produtos)
io.write(total)