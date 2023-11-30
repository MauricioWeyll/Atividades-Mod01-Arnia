const io = require("../Io/io")

io.write("Digite seu nome")
const nome = io.read()
io.write(nome)
io.write('O nome informado foi: ' + nome)
