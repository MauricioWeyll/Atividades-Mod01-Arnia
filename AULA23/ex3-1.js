const io = require("../Io/io")

/* Faça um programa de computador que recebe do usuário 10 números e
depois imprime os pares e depois os ímpares */

const numeros = []
const pares = []
const impares = []

for(let i = 0; i < 10; i++){
    io.write(`Digite o ${i + 1}º número:`)
    const numero = io.readInt()
    numeros.push(numero)
}

numeros.forEach((numeroAtual) => {  // numeroAtual - recebe todos os ítens do Array (numeros) para operar os condições no if.
    if(numeroAtual % 2 === 0){
        pares.push(numeroAtual)
    } else{
        impares.push(numeroAtual)
    }
})
io.write(numeros)
io.write(pares)
io.write(impares)