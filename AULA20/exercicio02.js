const io = require("../Io/io")

let multiplicador = 0
let soma = 0 

io.write("Escreva 20 numeros inteiros:")
let numeros = io.readInt()

while(multiplicador < 20) {
    io.write(`Digite ${multiplicador} numeros:`)
    soma = soma + io.readInt()
    multiplicador++
}
const media  = soma / 20
io.write(`A média dos muneros escolhidos é: ${media}`)