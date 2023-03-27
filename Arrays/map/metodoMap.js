//map nao altera o valor do array original,
// para isso tem que colocar o retorno resultado dentro de outro const ou varivel
/*
const notas = [10, 6.5, 8, 7.5];

const notasAtualizadas =
    notas.map(
        (nota) => {
            return nota + 1
        }
    )

console.log(notasAtualizadas)

//nao ira somar se o valor das notas for maior ou igual a 10
const notasSomadas =
    notas.map(
        (nota) => {
            return 
            if nota + 1 >= 10 
            ento(?) 10 
            seNAO else(:) nota + 1
        }
    )

console.log(notasSomadas)

*/

const notas = [10, 6.5, 8, 7.5];
const notasAtualizadas = notas.map(nota => {
    if (nota >= 10) {
        return nota
    } else {
        return nota + 1
    }
}
)

console.log(notasAtualizadas)