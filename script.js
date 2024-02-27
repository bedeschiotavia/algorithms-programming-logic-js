/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)


/*
  Solicite 2 números, faça a soma deles
  e apresente o resultado final ao usuário
*/

// alert("Iremos somar 2 números")
// let numberOne = prompt("Digite o primeiro número:")
// let numberTwo = prompt("Digite o segundo número:")
// let result = Number(numberOne) + Number(numberTwo)
// alert("Resultado final: " + result)


/*
  Encontre a solução ao problema:

  Pergunte o nome do usuário e escreva a mensagem:
  "Olá, [nome do usuário]"

*/
// let nome = prompt("Qual o seu nome?")
// alert("Olá, " + nome)
