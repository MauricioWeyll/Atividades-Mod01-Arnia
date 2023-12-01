const io = require("../Io/io") // Bliblioteca

io.write("Digite o valor atual do seu salário:")
let salario = io.readFloat() // recebe o valor do usuário

io.write("Digite o valor da porcentagem para o aumento:")
let aumento = io.readFloat() // recebe o valor do usuário
io.write(`O aumento é de ${aumento}%.`)

const resultado = (salario * aumento / 100) + salario // faz o calculo
io.write(`O valor total do salário com reajuste é: ${resultado}`) // escreve o resultado.