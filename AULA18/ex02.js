const io = require("../Io/io")

io.write('Escreva um número inteiro maior que zero')

const numero1 = io.readInt()
io.write('Agora digite o segundo número:')
const numero2 = io.readInt()
const multiplicacao = numero1 * numero2
io.write(`Ok! A multiplicação dos dois números digitados é: ${multiplicacao}.`)