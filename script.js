let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let multi = numberOne * numberTwo
let div = numberOne / numberTwo
let rest = numberOne % numberTwo

alert(`A soma dos números é: ${sum}`)
alert(`A subtração dos números é: ${sub}`)
alert(`A multiplicação dos números é: ${multi}`)
alert(`A divisão dos números é: ${div}`)
alert(`O resto da divisão dos números é: ${rest}`)

if (sum % 2 === 0) {
  alert(`A soma dos números é par: ${sum}`)
} else {
  alert(`A soma dos números é ímpar: ${sum}`)
}

if(numberOne === numberTwo) {
  alert(`Os números digitados são iguais`)
} else {
  alert(`Os números digitados são diferentes`)
}
