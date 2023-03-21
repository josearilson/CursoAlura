// let x = "";
// console.log(x);

// x = "oi"


/// declaracao de funcao


// 1) decalra a funcao 


// 2) executa a funcao 
//imprimeTexto('texto oi')
//imprimeTexto('outro oi')

// 3) formas de excrever funcao
function soma() {
    const resultado = 2 + 2
    return resultado
}

console.log(soma()) //undefined nao informei o   return resultado



//outra forma de escrever
function soma1() {

    return Math.round(3.5) + 2
}
console.log(soma1())


//outra forma de escrever
function soma2() {

    return 2 + 3
}



function imprimeTexto(texto) {
    console.log(texto);
}
imprimeTexto(soma2())