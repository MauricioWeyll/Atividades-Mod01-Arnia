const io = require("../Io/io")

/* Faça um programa de computador para receber preços de 10 produtos
e depois imprimir os preços que estão acima da média. */

io.write("Cadastre os valores dos seus produtos")

let total = 0
let preco
let media

let precos = []

for(i = 0; i < 5; i++){
    io.write(`Cadastre o ${i + 1}º preço:`)
    preco = io.readFloat()
    precos.push(preco)
    total = total + preco
}

media = total / 5
io.write(`A média é: ${media}`)

for(i = 0; i < 5; i++){
    if (precos[i] > media){
        io.write(`O preço ${precos[i]} está à cima da média.`)
    }    
}




