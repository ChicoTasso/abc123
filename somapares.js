

function somar(num){
    var input = require('readline-sync')
    var num = parseInt(input.question('Insira um numero'))
    if ( num > 0) {
        let somaPares = 0;
        
        for (let i = 1; i <= num ; i++) {
            if (i % 2 == 0) {
                somaPares += i
            }
    }
    
        
        console.log("A soma dos números pares de 1 até", num, "é:", somaPares)
    }
}

somar()



