const io = require("../Io/io")

io.write(`Vamos cadastrar os dados de votação por município. \nDigite o nome do Municício:`) 
const municipio = io.read()

io.write("Digite o numero total de Eleitores do município:")
let eleitores = io.readInt()

io.write("Digite o número de votos em branco:")
let brancos = io.readInt()

io.write("Digite o número de votos nulos:")
let nulos = io.readInt()

io.write("Digite o numero de votos válidos:")
let validos = io.readInt()

const percentual_brancos = (brancos / eleitores * 100)
io.write(`O Percentual dos votos Brancos é de ${percentual_brancos}% em relação ao Número total de Eleitores`)

const percentual_nulos = (nulos / eleitores * 100)
io.write(`O Percentual dos votos Nulos é de ${percentual_nulos}% em relação ao Número total de Eleitores`)

const percentual_validos = (validos / eleitores * 100)
io.write(`O Percentual dos votos Válidos é de ${percentual_validos}% em relação ao Número total de Eleitores`)




