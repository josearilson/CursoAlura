let telefone = 12341234;
// teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings
console.log("O telefone é " + String(telefone));

let telefone1 = 12341234;
// o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.
console.log("O telefone é " + telefone1.toString());

let usuarioConectado = false;
// teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
console.log("usuarioConectado é ", String(usuarioConectado)); usuarioConectado = true;
// agora teremos uma string “true”.
console.log("usuarioConectado é ", String(usuarioConectado));
// Vamos calcular a área de um retângulo

let largura1 = "10";
let altura1 = "5";
// teremos a conversão de String para números, possibilitando a realização da multiplicação
console.log("A conversao de largura1 e altura1 é ", Number(largura1) * Number(altura1));

let largura = "10";
let altura = "5";
// teremos a conversão de String para números realizado usando o + antes das variáveis
console.log("A conversao de largura e altura é ", + largura * + altura);


let meuNome = "leonardo";
// como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log("meuNome é ", Number(meuNome));
// a conversão também retornará NaN
console.log("meuNome é ", + meuNome);

let usuarioConectado1 = false;
// teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
console.log("usuarioConectado1 é", Number(usuarioConectado1));


usuarioConectado = true;
// agora teremos a conversão de true (verdadeiro) para o número 1.
console.log(Number("usuarioConectado é", usuarioConectado)); 