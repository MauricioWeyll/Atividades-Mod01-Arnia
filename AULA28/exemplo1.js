// Declarando Objetos.

const pessoa1 = {
    Nome: 'Mauricio Weyll.',
    dataNasciemto: '18-02-1988.',
    profissao: 'Gerente comercial'
}

console.log(pessoa1)
console.log(pessoa1.Nome)

//Incluir nova propriedade no objeto
pessoa1.salario = 5000;

// Alterando o valor de uma propriedade do objeto
pessoa1.Nome = 'Roger Weyll'
console.log(pessoa1)

//Deletando uma propriedade
delete pessoa1.profissao
console.log(Nome)