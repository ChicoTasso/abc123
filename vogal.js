function contarVogais() {
    var input = require('readline-sync')    
    const palavra = input.question("Digite uma palavra:").toLowerCase();
    let contador = 0;

    for (let i = 0; i < palavra.length; i++) {
        const letra = palavra[i];
        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            contador++;
        }
    }

    console.log(`A palavra "${palavra}" tem ${contador} vogais.`);
}

contarVogais();

