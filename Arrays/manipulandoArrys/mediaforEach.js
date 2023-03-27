const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

notas.forEach(//funcao callback funcao anonima
    function (
        //parametros
        nota, indice) {
        somaDasNotas += nota
        console.log(indice)
    })


const media = somaDasNotas / notas.length
console.log(media)