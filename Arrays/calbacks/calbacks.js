const nomes = ["jose", "renata", "guilherme"]

// nomes.forEach(
//funcao callback funcao anonima
//     function (
//         //parametros
//         nomes, indice) {
//         console.log(nomes)
//     })


nomes.forEach(

    //funcao callback com funcao arrowFunction 
    (
        //parametros
        nomes, indice) => {
        console.log(nomes)
    }

)
function imprimeNome() {
    console.log(nomes)
}

nomes.forEach(imprimeNome)