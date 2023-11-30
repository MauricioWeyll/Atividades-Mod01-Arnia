const io = require("../Io/io") // biblioteca.

let contador = 0 //variavel base para a contagem.

io.write("Escreva a quantidade de vezes que voce deseja repetir sua frase:") // ler o comando para o usuario.
let multiplicador = io.readInt() //recebendo o valor do usuario.

io.write("Digite sua frase:") // ler o comando para o usuario.
let frase = io.read()//recebendo a frase do usuario.

while(contador < multiplicador) { // Enquanto o contador for menor que o multiplicador..
    io.write(frase) // Escreva a frase
    contador++ // comando para adicionar 1 com contador a cada leitura
}   