const io = require("../Io/io")

let iterador = 1
let fatorial = 1

io.write("Escreva o número para calcular o fatorial:")
let fator = io.readInt()

while(iterador <= fator) {
    fatorial = iterador * fatorial 
    iterador = iterador + 1
}

io.write(`Este é o fatorial ${fatorial} de fator ${fator}.`)

