//VARIÁVEIS
/*
var helloWord = "Olá, Mundo! " //Não use o VAR 

let raio = 10
const pi = 3.14
raio = 5;

areaDoCirculo = pi *(raio*raio)

console.log(areaDoCirculo + "cm²")
*/

//OPERADORES LÓGICOS

//&& -> E (Se tiver, pelo menos, algum false, a lógica se torna false)| || -> OU (Se tiver, pelo menos, algum true, a lógica se torna true) | ! NEGAÇÂO (Contra)
/*
console.log(true && true)
console.log(true && false && true && true && true)
console.log(false && false)

console.log(true || true || true)
console.log(false || false|| false)
console.log(false || false|| true)

console.log(!true)
console.log(!false)
*/

//OPERADOR TERNÁRIO OU CONDICIONAL

// ? (SE) | : (SE NÂO) |

/*let rain = false
rain = true

const umbrella = rain ? 'Levar guarda-chuva' : 'Deixar guarda-chuva'

console.log(umbrella)

//Exemplo (TRANFERÊNCIA BANCÁRIA)

const balance = true
const isNotBlocked = true
const accountExist = true

const tranferOk = balance && isNotBlocked && accountExist ? 'TRANFERÊNCIA REALIZADA' : 'TRANSFERÊNCIA NEGADA'

console.log(tranferOk)*/

//OPERADORES TYPEOF E DELETE (Tipo de Variável) e ()
/*
const numero = 10
const letra = "Hello, World"

const objeto = {
    Name: "Object" ,
    age: 10 ,
    heigth : 1.65
}
delete objeto.age

console.log(typeof numero + typeof letra)
console.log(objeto)*/

//CONTROLE DE FLUXO - CONDICIONAIS - IF (Se) / ELSE (Se não) e ELSE IF (Mas se...)
/*
const age = 19

if(age >= 18){
    console.log("Adulto")
}else if(age <=17 && age >=14){
    console.log("Adolescente")
}else (
    console.log("Criança")
)*/

//CONTROLE DE FLUXO - CONDICIONAIS - SWITCH CASE
/*
const age = 15

switch (age) {
    case 10:
        console.log("Criança")
        break;
    case 11:
        console.log("Criança")
        break;
    case 12:
        console.log("Criança")
        break;
    case 13:
        console.log("Criança")
        break;
    case 14:
        console.log("Adolescente")
        break;
    case 15:
        console.log("Adolescente")
        break;
    case 16:
        console.log("Adolescente")
        break;
    case 17:
        console.log("Adolescente")
        break;
    case 18:
        console.log("Adulto")
        break;
    case 19:
        console.log("Adulto")
        break;
    case 20:
        console.log("Adulto")
        break;
    default: 
    console.log("Idade não encontrada")
}*/

//ESTRUTURAS DE REPETIÇÃO - FOR

/*for (let i = 0; i <= 10; i++) {
    console.log("Contando..." + i);
}

console.log("Terminou o For")


const students = ['Pedro', 'Paulo', 'José', 'João']
console.log(students.length) //Verificar o tamanho do ARRAY

for (let i = 0; i < students.length; i++) {
    console.log(`${students[i]} está presente na aula`)
}*/

//ESTRUTURAS DE REPETIÇÂO - WHILE
/*
while (true){
    console.log('Algo')
}

let i = 0 

while (i < 200){
    console.log(i)
    i+=40
}*/

//ESTRUTURAS DE REPETIÇÃO - FOR OF e FOR IN

//FOR OF
/*let myName = 'Pedro'
let persons = [
    'João', 'Pedro', 'José'
]

for (let variable of myName) {
    console.log(variable)
}*/

//FOR IN (OBJETOS)
/*const student = {
    name: 'Pedro',
    age: 18,
    genre: 'Male'
}

//Ver os atributos de cada propriedade do Objeto
console.log(student["age"])

//Mostrar todos os atruibutos do Objeto
for (let property in student) {
    console.log(`${property} : ${student[property]}`)
}
//FOR IN em um objeto
//for(let property in student){
//console.log(property)
//}*/

//DESAFIOS - 2

//1
let ten = 10
let number1 = 1

if (number1 > ten) {
    console.log('O número digitado é MAIOR do que 10!')
}
else if (number1 === ten) {
    console.log('O número digitado é IGUAL à 10!')
}
else {
    console.log('O número digitado é MENOR do que 10!')
}
//2
const person = {
    name: 'Pedro',
    nacionality: 'Brasileiro'
}
if (person.nacionality === "Brasileiro" || nacionality === "brasileiro") {
    console.log('Você é Brasileiro!!')
} else {
    console.log("Você não é Estrangeiro!")
}
//3
const randomNumber = Math.floor(Math.random() * (10 - 1) + 1)
const winningNumber = Math.floor(Math.random() * (10 - 1) + 1)

console.log(randomNumber, "Seu número")
console.log(winningNumber, "Número sorteado")

if (randomNumber === winningNumber) {
    console.log("Você ganhou!")
} else {
    console.log("Você perdeu!")
}
//4
const firstNumber = 10
const seccondNumber = 20
const trirdNumber = 30

if (firstNumber > seccondNumber && firstNumber > trirdNumber) {
    console.log("O primeiro É O MAIOR")
} else if (seccondNumber > trirdNumber) {
    console.log("O segundo é o MAIOR")
} else {
    console.log("O terceiro é MAIOR")
}

if (firstNumber < seccondNumber && firstNumber < trirdNumber) {
    console.log("O primeiro É O MENOR")
} else if (seccondNumber < trirdNumber) {
    console.log("O segundo é o MENOR")
} else {
    console.log("O terceiro é MENOR")
}
//5
const person2 = {
    nome: "Pedro",
    idade: 18,
    sexo: "Masculino",
    profissão: "Programador",
    nacionalidade: "Brasileiro"
}
const person3 = {
    nome: "Pablo",
    idade: 19,
    sexo: "Masculino",
    profissão: "Programador",
    nacionalidade: "Argentino"
}
const person4 = {
    nome: "Maria",
    idade: 17,
    sexo: "Feminino",
    profissão: "Programador",
    nacionalidade: "Brasileira"
}
const person5 = {
    nome: "Juan",
    idade: 45,
    sexo: "Masculino",
    profissão: "Programador",
    nacionalidade: "Colombiano"
}
const person6 = {
    nome: "Lúcia",
    idade: 25,
    sexo: "Feminino",
    profissão: "Programador",
    nacionalidade: "Brasileira"
}

if (person2.idade >= 18 && person2.nacionalidade === "Brasileiro" || person2.nacionalidade === "Brasileira") {
    console.log("Parabéns, " + person2.nome + ". Você foi APROVADO(A) no processo seletivo!")
} else {
    console.log("Infelizmente, " + person2.nome + ", você NÃO APROVADO(A) no processo seletivo. Algum (Ou todos) dos seus requitos não se encaxam requisitos: ")
    console.log(person2.nacionalidade)
    console.log(person2.idade + " anos")
}
if (person3.idade >= 18 && person3.nacionalidade === "Brasileiro" || person3.nacionalidade === "Brasileira") {
    console.log("Parabéns, " + person3.nome + ". Você foi APROVADO(A) no processo seletivo!")
} else {
    console.log("Infelizmente, " + person3.nome + ", você NÃO APROVADO(A) no processo seletivo. Algum (Ou todos) dos seus requitos não se encaxam requisitos: ")
    console.log(person3.nacionalidade)
    console.log(person3.idade + " anos")
}
if (person4.idade >= 18 && person4.nacionalidade === "Brasileiro" || person4.nacionalidade === "Brasileira") {
    console.log("Parabéns, " + person2.nome + ". Você foi APROVADO(A) no processo seletivo!")
} else {
    console.log("Infelizmente, " + person4.nome + ", você NÃO APROVADO(A) no processo seletivo. Algum (Ou todos) dos seus requitos não se encaxam requisitos: ")
    console.log(person4.nacionalidade)
    console.log(person4.idade + " anos")
}
if (person5.idade >= 18 && person5.nacionalidade === "Brasileiro" || person5.nacionalidade === "Brasileira") {
    console.log("Parabéns, " + person5.nome + ". Você foi APROVADO(A) no processo seletivo!")
} else {
    console.log("Infelizmente, " + person5.nome + ", você NÃO APROVADO(A) no processo seletivo. Algum (Ou todos) dos seus requitos não se encaxam requisitos: ")
    console.log(person5.nacionalidade)
    console.log(person5.idade + " anos")
}
if (person6.idade >= 18 && person6.nacionalidade === "Brasileiro" || person6.nacionalidade === "Brasileira") {
    console.log("Parabéns, " + person6.nome + ". Você foi APROVADO(A) no processo seletivo!")
} else {
    console.log("Infelizmente, " + person6.nome + ", você NÃO APROVADO(A) no processo seletivo. Algum (Ou todos) dos seus requitos não se encaxam requisitos: ")
    console.log(person6.nacionalidade)
    console.log(person6.idade + " anos")
}
//6
const nota = 5

switch (nota) {
    case 0:
        console.log("Zerou!")
        break;
    case 1:
        console.log("Horrível!")
        break;
    case 2:
        console.log("Péssima!")
        break;
    case 3:
        console.log("Muito Ruim!")
        break;
    case 4:
        console.log("Ruim!")
        break;
    case 5:
        console.log("Regular!")
        break;
    case 6:
        console.log("Mais ou menos!")
        break;
    case 7:
        console.log("Boa!")
        break;
    case 8:
        console.log("Muito Boa!")
        break;
    case 9:
        console.log("Ótima!")
        break;
    case 10:
        console.log("Fechou!")
        break;
    default:
        break;
}
//7 e 8
const imparOuPar = 11;

if (imparOuPar % 2 === 0 && imparOuPar % 5 === 0) {
    console.log("Número par e divisível por 5!");
} else if (imparOuPar % 2 === 0) {
    console.log("Número par!");
}

if (!(imparOuPar % 2 === 0) && imparOuPar > 1 && ehPrimo(imparOuPar)) {
    console.log("Número ímpar e primo!");
} else if (!(imparOuPar % 2 === 0)) {
    console.log("Número ímpar!");
}

function ehPrimo(numero) {
    if (numero < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
//9