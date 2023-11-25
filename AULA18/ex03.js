const io = require("../Io/io")

io.write('Olá, Escreva o primeiro número:')
const numero1 = io.readInt()
io.write(`Ok! Agora digite o segundo número:`)
const numero2 = io.readInt()
io.write('Muito bem, seu resultado está sendo calculado.')
const resto = numero1 % numero2
io.write(`Pronto, aqui está a diferença entre os dois números escolhidos: ${resto}`)