const io = require("../Io/io")

/* Faça um programa de computador para receber 10 nomes de alunos e
suas respectivas notas e depois imprimir as notas e nomes daqueles que
obtiveram notas maiores que 7 */
let nomes = []
let notas = []
let notasAcimaDe7 = []

io.write(`Cadastre o nome e a nota do aluno, respectivamente.`)

for (let i = 0; i < 10; i++) {
    let nome = io.read()
    let nota = io.readInt()
    nomes.push(nome)
    notas.push(nota)
}




