const io = require("../Io/io")

io.write("Forneça um nome para repetir 10x.")
let name = io.read()

for(iterador = 0; iterador < 10; iterador++) {
    let vezes = io.readInt()
    io.write(name * vezes)
}