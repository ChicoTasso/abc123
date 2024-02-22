


function media(num){
    var input = require('readline-sync')
    var num = parseInt(input.question('Insira um numero'))
    if (num % 2 == 0){
    console.log('O número é par')
}   else {
    console.log('O número é impar')
}
}

media()