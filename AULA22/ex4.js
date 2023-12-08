const io = require('../Io/io')

/* Ex.: 04 - Faça um programa para escrever de 1 a n, sendo n fornecido
pelo usuário */

io.write('Escreva um numero.')
const numero = io.readInt()

for(i = 1; i <= numero; i++){    
        io.write(i)
}
       



