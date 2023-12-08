const io = require("../Io/io")

/* Faça um programa de computador para receber 10 números inteiros e
depois imprimir seus sucessores. */

io.write('Escreva 10 numeros')

let numeros = []

for(i = 0; i < 10; i++){
    io.write(`Escreva o ${i + 1}º número`)
    let numero = io.readInt()
    numeros.push(numero)
}

for(i = 0; i <10; i++){
    io.write(`O sucessor o ${numeros[i]} é ${numeros[i] + 1}`)
}