// ARRAY - MÉTODOS 
// const students = ['João', 'Maria', 'Pedro', 'Carla', 'Bia', 'Maurício']
// console.log(students)

// PUSH (Adiciona itens)
// students.push('Paulo','Rodrigo')
// console.log(students)

// LENGTH (Quantidade de itens)
// console.log(students.length)

// SORT (Organiza em Ordem Alfabética)
// console.log(students.sort())

// DELETE (Deleta os itens por posição)
// delete students[0]
// console.log(students)

// SPLICE (Tira e coloca itens na posição que a gente quer. Modifica o Arrays) 
// students.splice(1,2, 'Ana') //Indica qual posição e quantos vai tirar a partir desta posicão | Colocando elementos
// console.log(students)

// SLICE ()
// const newstudents = students.slice(1,2) //(Cria um novo Array com os itens criados)
// console.log(newstudents)

// POP (Tira o último item do array)
// students.pop()
// console.log(students)

// SHIFT (Tira o primeiro item do array)
// students.shift()
// console.log(students)

// FOR EACH - (Mostra Item por Item do ARRAY)

// const students = [
//     { name: 'Pedro', age: 18 },
//     { name: 'Bruno', age: 19 },
//     { name: 'Cristiana', age: 20 },
//     { name: 'Ana', age: 21 },
//     { name: 'Paulo', age: 22 },
//     { name: 'Júlio', age: 45 },
// ];

// let allStudentsAge = 0

// students.forEach((student, index, array) => { //Index (Posição do ARRAY) // Array (Mostra o ARRAY completo)
//     allStudentsAge += student.age
// })

// const avarageAge = allStudentsAge / students.length

// console.log(`A média da idade dos alunos é ${avarageAge.toFixed(0)} anos`)

// students.forEach((student, index)  => {
//     console.log(`O aluno chama-se ${student.name} e tem ${student.age} anos e está na posição ${index} do Array`)
// });

/*
//MAP / REDUCE / FILTER
    MAP : 
    - Cria um novo array, a partir do array percorrido (Array original)
    - Cria um novo array, com a mesma quantidade de itens do array oroginal
    - Aceita 3 parâmetros
        - Item do array
        - Index
        - Array completo
*/

const numbers = [1, 2, 3, 4]
const students = [
    { name: 'Pedro', age: 18 },
    { name: 'Thiago', age: 18 },
    { name: 'João', age: 20 },
    { name: 'Marcelo', age: 27 },
    { name: 'Matheus', age: 25 },
]

// const newArray = numbers.map((number) => {
//    // const newNumber = number + 10 * 2 / 3
//     return number * 2 //Sempre retornar
// })

// console.log(numbers)
// console.log(newArray)

const newStudents = students.map((student) => {
    const newStudent = {
        name: student.name + ' da Silva',
        age: student.age - 5
    }
    if (student.name === 'Pedro') {
        return (`{name: '${student.name} de Sousa' , age: ${student.age}}`)
    }
    return newStudent
})
console.log(students)
console.log(newStudents)

//Formas de codar o seu MAP

const newArray1 = students.map(function (number) {
    return number * 3
})

const newArray2 = students.map((number) => {
    return number * 3
})

const newArray3 = students.map((number, index) => number * 3)