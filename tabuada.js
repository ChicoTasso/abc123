var input = require('readline-sync')

function multiplicado(num){
    tabuada = 1
    while ( tabuada <= 10 ) {
        resultado = num * tabuada;
        console.log(`${num} x ${tabuada} = ${resultado}`);
        tabuada++;
    }
}

for (let i = 1; i<=3; i++){
    
    let num = Number(input.question('Digite um numero'))
    multiplicado(num)

}