const peso01 = 2.3;
const peso02= Number('5.0') //outra forma de declara um numero serve para inteiros e "double"

console.log(peso01,peso02)

//dentro de number temos metodos para testes ex:

console.log(Number.isInteger(peso02)) //para saber se é um inteiro
console.log(Number.isInteger(peso01)) //só é inteiro se a minha casa decimal for igual a zero

const notaProva01= 5.645
const notaProva02= 8.869

const media= (notaProva01+notaProva02)/2

console.log(media.toFixed(2)) //to fixed serve para dizer quantas casa decimais eu quero
console.log(media.toString) //transforma em string
console.log(media.toString(2))//transforma em binario
