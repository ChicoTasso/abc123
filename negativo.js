

function negativo(n1){
    var input = require('readline-sync')
    var n1 = parseInt(input.question('Insira o numero.'))
    if (n1 > 0) {
    console.log('O numero é positivo')
} else if (n1 == 0){
    console.log('O numero eh exatamente 0')
} else {
    console.log('o numero é negativo')
}
}
negativo()