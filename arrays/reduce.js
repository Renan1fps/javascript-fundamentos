/*A função reduce basicamente irá pegar varios elementos e juntar em um só. para isso devo passar um valor inicial
e o atual, caso nao passe ele pega os dois primeiros do array */

const aluno = [
  { nome: "renan", nota: 10 },
  { nome: "leo", nota:7 },
  { nome: "iury", nota: 6 },
  { nome: "emerson", nota: 8 },
  { nome: "big big", nota: 10 },
  { nome: "eduardo", nota: 6.5 }
];


const arrayResultante= aluno.map(notas=>notas.nota).reduce(function(acumulador, atual){
    return acumulador+atual
})
console.log(arrayResultante)