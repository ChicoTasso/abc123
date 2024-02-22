var input = require('readline-sync')

var n1 = parseInt(input.question('Insira o primeiro numero'))
var n2 = parseInt(input.question('Insira o seguundo numero'))
var n3 = parseInt(input.question('Insira o terceiro numero'))

var media = (n1+n2+n3)/3

if (media >= 7){
    console.log ('Aprovado')
} else if(5 < media & media < 7){
    console.log('Recuperacao')
} else  {
    console.log('Reprovado')
}