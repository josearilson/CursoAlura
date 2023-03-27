//para colocar as letras em maiusculo toUpperCase
const nomes = ["Jose", "arilson", "Dias", "RAmalho"]


const nomesPadronizados = nomes.map(
    (nome) => {
        return nome.toUpperCase()
    }
)

console.log(nomesPadronizados)

//ou
const nomesPadronizadosReturn = nomes.map(
    (nome) => nome.toUpperCase()
)


console.log(nomesPadronizadosReturn)



//outros exemplos
const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"

const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto.toUpperCase())  //Fundamentos de JS Alura