const io = require("../Io/io")

/* Faça um programa de computador para contar e imprimir a
quantidade de divisores que um número natural possui. Este número
deverá ser fornecido pelo usuário. */

function divisores() {
    io.write('Escreva um número natural')
    let numero = io.readInt()
    let quantDivisores = 0;
    let i = 1;

    while (i <= numero / 2){
        if (numero % i === 0){
            quantDivisores++
        }
        i++
    }
    
    if (numero % numero === 0){
        quantDivisores++
    }

io.write(`O número de divisores é: ${quantDivisores}`)
}

divisores()



