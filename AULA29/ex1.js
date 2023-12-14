const io = require('../Io/io')

// //Faça um programa para receber nome, preço e ano de lançamento de
// 10 carros utilizando de uma classe Carro. Depois inclua na classe um
// método que aumente o preço do carro em R$5.000. Chame o método
// para cada carro e mostre os dados atualizados.

class Carros {
    nome 
    ano
    preco

    constructor (nome, ano, preco){
        this.nome = nome
        this.ano = ano
        this.preco = preco
    }
    aumentarPreco() {
        this.preco += 5000
    }
}

const dadosCarros = []

for(let i = 0; i < 2; i++){
    io.write(`Cadastre o nome do ${i + 1}º carro`)
    let nome = io.read()
    io.write(`Cadastre o ano do ${i + 1}º carro`)
    let ano = io.readInt()
    io.write(`Cadastre o preço do ${i + 1}º carro`)
    let preco = io.readFloat()
    const carro = new Carros(nome, ano, preco)
    dadosCarros.push(carro)
}

io.write(dadosCarros)

dadosCarros.forEach(carro => {
    carro.aumentarPreco()
});

io.write(dadosCarros)