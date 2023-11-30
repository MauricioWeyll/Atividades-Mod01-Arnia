const io = require("../Io/io")

let iterador = 0

io.write("Digite um número:")
const numero = io.readInt()

while(iterador <= numero){
    if(iterador % 2 === 0){
        io.write(`${iterador} -Par`)
    }else{
        io.write(`${iterador} -Impar`)
    }
    iterador++
}