

function fator(num){
    var input = require('readline-sync')
    var num = parseInt(input.question('Insira um numero'))
    var fatorial = 1;

    for (let i = num; i >=1; i--){
    fatorial *= i;
}
console.log(fatorial)
}
fator()