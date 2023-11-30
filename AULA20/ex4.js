const io = require("../Io/io")

let iterador = 5

io.write("Digite um número para descobrir os multiplos 5 menores que o numero escolhido:")
let numero = io.readInt()

while(iterador <= numero) {
    io.write(`Os números multiplos de 5 menores que o numero escolhido é: ${iterador}`)
    iterador = iterador + 5
}

