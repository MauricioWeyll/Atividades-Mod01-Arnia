const io = require("../Io/io")

/* Faça um programa de computador que recebe do usuário 10 números e
depois imprime os pares e depois os ímpares */

let pares = []
let impares = []
let numeros = []

io.write("Escreva 10 números e descubra quais são pares e quais são ímpares.")

for(let i = 0; i < 10; i++){
    io.write(`Escreva o ${i + 1}º numero:`)
    let numero = io.readInt()
    numeros.push(numero)
}

numeros.forEach((numeroAtual) => {
    if (numeroAtual % 2 === 0){
        pares.push(numeroAtual)
    } else {
        impares.push(numeroAtual)
    }
})
io.write(numeros)
io.write(pares)
io.write(impares)