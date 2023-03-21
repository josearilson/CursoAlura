//declaracao tradicional
function apresentar(nome) {
    return `meu nome ${nome}`
}

//declaracao ArrawFuncion
const apresentarArrowFunction1 = nome => (nome)

const apresentarArrowFunction = nome => `meu nome ${nome}`

const soma = (num1, num2) => num1 + num2;


//Arrow function com + de 1 linha de instrucao

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Numeros é maior que 10"
    } else {
        return "Numeros é menor que 10"

    }

}

console.log(somaNumerosPequenos(1, 1))




///////Estrutura do `if`//////



const num = 9;

if (num > 10 || !num) {
    console.log('número não válido');


}



function verificaNumero(numero) {
    if (numero > 10) {
        return 'número maior que 10';
    } else {
        return 'número não é maior que 10';
    }
}

console.log(verificaNumero(9)) //número não é maior que 10










const num01 = 15;

if (num01 >= 0 && num01 <= 10) {
    console.log('número entre zero e dez');
} else if (num01 > 10 && num01 <= 20) {
    console.log('número entre dez e vinte');
} else if (num01 > 20 && num01 <= 30) {
    console.log('número entre vinte e trinta');
} else {
    console.log('outro número');
}