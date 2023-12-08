const io = require('../Io/io')

/* Faça um programa para imprimir os números pares menores
que um número fornecido pelo usuário. */

io.write('Digite um numero')
let numero = io.readInt()

for(i = 0; i < numero; i++){
    if (i % 2 == 0){
        io.write(`O numero ${i} é par.`)
    }
}

