const alunos = ["ana", "joao", "carlos", "antonio"];
const medias = [7, 4.5, 8, 5.5, 10];


const reprovados = alunos.filter(
    (_, indice) => {

        return medias[indice] < 7

    })


console.log(reprovados)