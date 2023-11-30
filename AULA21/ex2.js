const io = require("../Io/io")

io.write("Vamos descobrir se os 3 segmentos de retas que você digitou, formam um triangulo")
io.write("Digite o valor da reta 01:")
let reta1 = io.readInt()

io.write("Agora digite o valor da reta 02:")
let reta2 = io.readInt()

io.write("Pra finalizar, digite o valor da reta 3:")
let reta3 = io.readInt()

if (reta1 < reta2 + reta3 && reta2 < reta1 + reta3 && reta3 < reta1 + reta2) {
    io.write("O triangulo existe")
} else{
    io.write("O triangulo não existe")
} 