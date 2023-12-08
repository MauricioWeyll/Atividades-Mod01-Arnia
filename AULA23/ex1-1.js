const io = require("../Io/io")

// Refazendo o exercício sozinho.

/* Faça um programa de computador para receber 10 números inteiros e
depois imprimir seus sucessores. */

io.write("Escreva 10 números que te mostro o sucessor de cada um deles.")

let numeros = []

for(i = 0; i < 10; i++){
    io.write(`Escreva o ${i + 1}º número:`)
    let numero = io.readInt()
    numeros.push(numero)
}

for(i = 0; i < 10; i++){
    io.write(`O sucessor do número ${numeros[i]} é ${numeros[i] + 1}`)
}