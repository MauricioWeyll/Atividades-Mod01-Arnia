const io = require("../Io/io")

io.write("Forneça um nome:")
let name = io.read()
io.write("Forneça o número de vezes que você quer repetir o nome:")
let vezes = io.readInt()

for(iterador = 0; iterador < vezes; iterador++) {
        io.write(name)
}