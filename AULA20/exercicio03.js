const io = require("../Io/io")

let contador = 0

while(contador < 100) {
    io.write(contador)
    contador = contador + 2
}


