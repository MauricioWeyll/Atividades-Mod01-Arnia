const io = require("../Io/io")

/* Faça um programa de computador que leia números reais maiores que
zero. Quando for digitado o número zero, o programa deverá apresentar
os números que foram inseridos e a média destes (use while para
receber os números). */


let iterador = -1
let numerosInseridos = []
let total = 0


while (iterador !== 0){
    io.write("Escreva um número real (0 para parar) :")
    let numero = io.readFloat()
    if (numero == 0){
        break}
    numerosInseridos.push(numero)    
}

for (let i = 0; i < numerosInseridos.length; i++){
    total  += numerosInseridos[i]
}

let media = total / numerosInseridos.length

io.write(`Os numeros inseridos foram: ${numerosInseridos}`)
io.write(`A soma dos numeros inseridos é: ${total}`)
io.write(`A média dos numeros inseridos é: ${media}`)
