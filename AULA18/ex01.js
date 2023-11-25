const io = require('../Io/io')

io.write('Digite um número para ser calculada a raiz quadrada')

const numero = io.readInt()

const raiz = Math.sqrt(numero)
io.write(`Ok! Seu resultado é ${raiz}.`)
