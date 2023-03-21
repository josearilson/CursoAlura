// ==(comparacao implicita é validado o conteudo do arquivo)
const numero = 5;
const textoString = "5";
const numero1 = 5;
const textoString1 = "5";
// ==(comparacao implicita é validado o conteudo do arquivo)
console.log(numero == textoString)
// ==(comparacao explicita é validado o conteudo e o tipo do arquivo)

console.log(numero === textoString1)

//typeof verifica o tipo do variavel ( string, boleean, number)

console.log(typeof numero)
console.log(typeof textoString)

//conversao explicita
Number()
String()


/*

nome	operador
Operador de adição	x + y
Operador de subtração	x - y
Operador de multiplicação	x * y
Operador de divisão	x / y
*/
const car1 = {
    nome: "Operador de adição",
    operador: "x + y"
}
const car2 = {
    nome: "Operador de subtração",
    operador: "x - y"
}
const car3 = {
    nome: "Operador de multiplicação",
    operador: "x * y"
}
const car4 = {
    nome: "Operador de divisão",
    operador: "x / y"
}

console.table([car1, car2, car3, car4]);



///Mais exemplos

//   ||: Operador “ou”, retorna true caso uma condição seja válida;
//   &&: Operador “e”, retorna true somente se todas as condições forem válidas;
//   !=  Operadores “não igual” são operadores de comparação; comparam valores iguais.
//   !== estritamente não igual, compara se o valor e o tipo sao iguais nas variaveis A e B.