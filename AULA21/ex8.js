const io = require("..//Io/io")

let f
let c

io.write("Forneça uma temperatura em graus Fahrenheit para converter para Celsius.")
let F = io.readFloat()


c = ((f - 32) / 9) * 5
io.write(`O Valor é: ${c}c.`)