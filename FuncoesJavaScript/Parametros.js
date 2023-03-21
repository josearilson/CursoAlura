

//reaproveitar codigo com parametros de funcao
/*
function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`
}
console.log(nomeIdade("arilson", 35))
function somaOutroNumero(num1, num2) {
    return `o num1 é ${num1} e num2 é ${num2}`

}



*/


function soma(num1, num2) {
    return num1 + num2
}

function multiplica(mult1, mult2) {
    return mult1 * mult2
}

console.log(
    multiplica(soma(4, 5), soma(3, 3))
)

////////////////////
function cumprimentar() {
    console.log('oi gente!')
}

function cumprimentaPessoa(pessoa) {
    console.log(`oi, ${pessoa}!`)
}

cumprimentaPessoa('José') // “Oi gente! Meu nome é José


/////////////////////////
function cumprimentar() {
    return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Arilson') // “Oi gente! Meu nome é Arilson
/////////////////////


function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
}

console.log(
    operacaoMatematica(15, 30, 45) // 90
)


function comParametro(param) {
    console.log(param)
}
comParametro()