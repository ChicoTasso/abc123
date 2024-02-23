
function multiplicado(num){
    var input = require('readline-sync')
    var num = parseInt(input.question('Insira um numero'))
    tabuada = 1
    while ( tabuada <= 10 ) {
        resultado = num * tabuada;
        console.log(`${num} x ${tabuada} = ${resultado}`);
        tabuada++;
    }
}
multiplicado()