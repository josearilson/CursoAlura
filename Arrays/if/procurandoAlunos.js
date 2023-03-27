const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];


function exibeNomeNota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {

        console.log(`o aluno ${aluno} esta cadastrado`)

        //const alunos = listaDeAlunosEMedias[0]
        //const media = listaDeAlunosEMedias[1]

        let [alunos, media] = listaDeAlunosEMedias


        const indiceDoAluno = alunos.indexOf(aluno)
        const mediaDoAluno = media[indiceDoAluno]

        console.log(`a posição do aluno ${aluno} é ${indiceDoAluno}`)
        console.log(`a media do aluno ${aluno} é ${mediaDoAluno}`)

    } else {

        console.log(`${aluno} não esta na lista de alunos cadastrados!`);

    }
}

exibeNomeNota("Ana")