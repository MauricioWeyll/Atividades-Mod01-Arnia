const io = require("../Io/io")

io.write("Escreva quantos anos você é fumante:")
const idadefumante = io.readInt()

io.write("Agora digite o número de cigarros que você fuma por dia:")
const numero_de_cigarros = io.readInt()

io.write("Digite o valor do maço:")
const valor_maco = io.readFloat()

const resultado = numero_de_cigarros * (idadefumante * 365) / 20 * valor_maco
io.write(`O valor total gasto em cigarro em todos o período fumando é: ${resultado}`)
