const idadeMinima = 18;
const idadeCliente = 16;

//IF classico

if (idadeCliente >= idadeMinima) {
    console.log('cerveja')
} else {
    console.log('suco')
}


//if com ternario
//condicao                                 //true     //false
console.log(idadeCliente >= idadeMinima ? 'cerveja' : 'suco')

a = []
b = 20
c = true
d = ''


if (b === 20 && c != false && d == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

if (a == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

if (d) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

if (b == '20') {
    console.log('Verdade')
} else {
    console.log('Falso')
}


const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const idade2 = 16;




const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)

const pedido1 = `${nome} diz: "por favor, quero beber ${idade2 >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido1)