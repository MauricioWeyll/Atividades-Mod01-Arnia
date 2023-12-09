const io = require("../Io/io")

/*Faça uma função que recebe um valor inteiro e verifica se o valor é par.
A função deve retornar um valor booleano (true ou false). */

function par(valor){
    if(valor % 2 == 0){
        true
        io.write("Par")
    } else {
        false
        io.write("Ímpar")
    }
    return valor
}

const resultado = par(1352)
io.write(resultado)


