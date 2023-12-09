const io = require("../Io/io")

/* Faça uma função que recebe a idade de uma pessoa em anos, meses e
dias e retorna essa idade expressa em dias. */

let idade = (a, m, d) => a, m, d

io.write("Escreva quantos anos você tem:")
let anos = io.readInt()
io.write("Escreva quantos meses você tem:")
let meses = io.readInt()
io.write("Escreva quantos dias você tem:")
let dias = io.readInt()

idade(anos, meses, dias)
anos = anos * 365
meses = dias * 30

let resultado = anos + meses + dias
io.write(resultado)