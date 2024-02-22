
function contagem (regressiva) {
    var input = require('readline-sync')
    var regressiva = parseInt(input.question('Insira um numero'))

    for (regressiva ;regressiva>= 1 ; regressiva--){
    console.log(regressiva)
        
    }
}
contagem()
