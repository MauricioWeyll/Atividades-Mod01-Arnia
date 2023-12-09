const io = require("../Io/io")

/* Faça um programa de computador para escrever de 1 a 100 em
ordem decrescente */

let decrescente = 100

for(let i = 0; i < 100; i++){
    io.write(decrescente)
    decrescente--
}