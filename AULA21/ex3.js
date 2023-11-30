const io = require("../Io/io")

io.write("Vamos descobrir quantos dias você já viveu?")

io.write("Então digite quantos anos você tem?")
let anos = io.readInt()

io.write("Perfeito, agora digite quantos meses faz desde seu ultimo aniversário:")
let meses = io.readInt()

io.write("Agora digite quantos dias:")
let dias = io.readInt()

const resultado = (anos * 365) + (meses * 30) + dias
io.write(resultado)