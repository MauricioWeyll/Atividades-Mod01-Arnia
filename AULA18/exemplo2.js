const io = require("../Io/io")

// Mostrar uma mensagem para o usuário
io.write('Digite o número para multiplicá-lo por 2')
// Receber o número do usuário
const numero = io.readInt()
// Feedback para o usuário
io.write(`Obrigado! O número digitado foi: ${numero}`)
// Dobrar o numero digitado
const resultado = numero * 2
// Mostrar o resultado do cálculo (numero dobrado)
io.write(`O Resultado é: ${resultado}`)