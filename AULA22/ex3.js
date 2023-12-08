const io = require("..//Io/io")

io.write("Escreva 10 nomes.")

let contadorMaria = 0

for(let i = 1; i <= 10; i++){
    io.write("Escreva um nome:")
    const coletaDeNomes = io.read()
    if(coletaDeNomes === "maria" || coletaDeNomes === "Maria") {
        contadorMaria++
    } 
}
io.write(`A quantidade de vezes que Maria foi digitado foi: ${contadorMaria}x`)