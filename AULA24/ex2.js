const io = require("../Io/io")

/* Faça uma função que recebe a idade de um nadador por parâmetro e
retorna a categoria desse nadador de acordo com a tabela abaixo: */

let idade = (idade) => idade

io.write("Digite a idade do nadador")
let idadeNadador = io.readInt()

idade(idadeNadador)

if (idadeNadador < 5){
    false
}

if (idadeNadador > 5 && idadeNadador <= 7){
    io.write("Infantil A")
}

if (idadeNadador > 8 && idadeNadador <= 10){
    io.write("Infantil B")
}

if (idadeNadador > 11 && idadeNadador <= 13){
    io.write("Juvenil A")
}

if (idadeNadador > 14 && idadeNadador <= 17){
    io.write("Juvenil B")
}

if(idadeNadador > 18){
    io.write("Adulto")
}
