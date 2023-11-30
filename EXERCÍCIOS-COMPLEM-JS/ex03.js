const io = require('../Io/io')

io.write(`Olá, escreva o nome do seu produto!`) 
const produto1 = io.read()

io.write(`Agora escreva o código contido no rótulo do seu produto:`)
const codigo = io.readInt()

io.write(`Descreva de forma simples o seu produto:`)
const descricao = io.read()

io.write(`Certo! Agora para finalizar cadastre o preço do seu produto:`)
const preco = io.readFloat()

io.write(`Pronto, seu produto foi cadastrado com sucesso.\nAqui está o resumo do seu cadastro:`)

const resumo1 = (`produto: ${produto1}. | Código: ${codigo}. | Descrição: ${descricao}. | R$ ${preco}.`)
io.write(resumo1)


io.write(`****************************************************************************`)

io.write(`Agora escreva o nome do seu próximo produto!`) 
const produto2 = io.read()

io.write(`Agora escreva o código contido no rótulo do seu produto:`)
const codigo2 = io.readInt()

io.write(`Descreva de forma simples o seu produto:`)
const descricao2 = io.read()

io.write(`Certo! Agora para finalizar cadastre o preço do seu produto:`)
const preco2 = io.readFloat()

io.write(`Pronto, seu produto foi cadastrado com sucesso.\nAqui está o resumo do seu cadastro:`)

const resumo2 = (`produto: ${produto2}. | Código: ${codigo2}. | Descrição: ${descricao2}. | R$ ${preco2}.`)
io.write(resumo2)

io.write(`****************************************************************************`)

io.write(`Escreva o nome do seu próximo produto!`) 
const produto3 = io.read()

io.write(`Agora escreva o código contido no rótulo do seu produto:`)
const codigo3 = io.readInt()

io.write(`Descreva de forma simples o seu produto:`)
const descricao3 = io.read()

io.write(`Certo! Agora para finalizar cadastre o preço do seu produto:`)
const preco3 = io.readFloat()

io.write(`Pronto, seu produto foi cadastrado com sucesso.\nAqui está o resumo do seu cadastro:`)

const resumo3 = (`produto: ${produto3}. | Código: ${codigo3}. | Descrição: ${descricao3}. | R$ ${preco3}.`)
io.write(resumo3)

io.write(`****************************************************************************`)

io.write("Produtos cadastrados com sucesso!")

