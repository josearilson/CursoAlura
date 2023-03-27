const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes)
console.log(meuSet)

const nomesAtualizados = [...meuSet]
console.log(nomesAtualizados)


const nomesAtualizadosSET = [...new Set(nomes)]
console.log(nomesAtualizadosSET)