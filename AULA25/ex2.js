const io = require("../Io/io")

/* Faça um programa que peça ao usuário um número natural e
imprima seus divisores.
➢ Divisores de 10: números menores ou iguais à 10 pelos quais 10 se
divide de forma exata (com resto igual a 0)
■ 1, 2, 5, 10 */

io.write("Digite um número Natural.")
let numeroNatural = io.readInt()

for(let i = 0; i < numeroNatural; i++){
    if(numeroNatural % i == 0){
        io.write(i)
    }
}