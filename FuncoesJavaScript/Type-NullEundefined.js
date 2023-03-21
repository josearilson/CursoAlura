let input = null;

if (input === null) {
    console.log('não há informação');
} else {
    console.log(input);
}


console.log(null == undefined); // true
console.log(null === undefined); // false


/*
No caso de números, é possível salvar em uma variável não somente o número em si, 
como em const num = 5;, mas também o resultado de uma operação (ou mais):

*/
const soma = 10 + 10;
const multiplicacao = 10 * 10;
const operacao = (soma + multiplicacao) + 10;
console.log(operacao)