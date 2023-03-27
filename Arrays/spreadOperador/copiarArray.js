const notas = [7, 7, 8, 9]

const novasNotas = [...notas]// ...  éo spreadOperador
novasNotas.push(10)

//ou
const novasNotas1 = [5, ...notas]// ...  éo spreadOperador



console.log(novasNotas)

console.log(notas)
console.log(novasNotas1)
