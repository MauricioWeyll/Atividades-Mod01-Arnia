const io = require("../Io/io")

/* Faça um programa de computador para receber 10 nomes de alunos e
suas respectivas notas e depois imprimir as notas e nomes daqueles que
obtiveram notas maiores que 7 */
let nomes = []
let notas = []
let notasAcimaDe7 = []

io.write(`Cadastre o nome e a nota do aluno, respectivamente.`)

for (let i = 0; i < 10; i++) {
    io.write(`Cadastre o nome do ${i+1}º aluno`)
    let nome = io.read()
    io.write(`Cadastre a nota do ${i+1}º aluno`)
    let nota = io.readInt()
    nomes.push(nome)
    notas.push(nota)
}

io.write("Os alunos classificados que obtiveram notas à cima da média, foram:")

for(let i = 0; i < 10; i++){
    if(notas[i] > 7){
        io.write(`O aluno ${nomes[i]} está à cima da média e sua nota é: ${notas[i]}.`)
    }
}