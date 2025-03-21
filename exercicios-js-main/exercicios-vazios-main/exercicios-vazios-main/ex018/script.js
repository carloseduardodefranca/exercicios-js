var salario = Number(prompt("qual é o seu salario?"))
var bonus = Number(prompt(" quantos % é seu bonus?"))
var resultado = salario + (salario * (bonus / 100))

alert(` seu salario é de R$ ${resultado}`)