
function multiplicado(num){
    tabuada = 1
    while ( tabuada <= 10 ) {
        resultado = num * tabuada;
        console.log(`${num} x ${tabuada} = ${resultado}`);
        tabuada++;
    }
}
multiplicado(12)