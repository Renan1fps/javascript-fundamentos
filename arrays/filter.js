/*a função filter irá me retonar um novo array a partir dos critérios que eu passar em minha funçao,
ele nunca retornara com mais elementos, ou vai ser com os mesmos ou menos*/

const carro = [
  { modelo: "fox", ano: 2015, cor: "preto" },
  { modelo: "camaro", ano: 2012, cor: "azul" },
  { modelo: "saveiro", ano: 2008, cor: "preto" },
  { modelo: "gol", ano: 2013, cor: "prata" },
  { modelo: "crossFox", ano: 2017, cor: "branco" },
  { modelo: "corola", ano: 2021, cor: "preto" },
  { modelo: "civic", ano: 2018, cor: "preto" },
];

const novoArray = carro.filter(function (elementos) {
  return elementos.ano >= 2015;
});
console.log(novoArray)

//exemplo dois com funções arrow já criadas
let corCarro= carroElemento=> carroElemento.cor=='preto'
let anoCarro= ano=> ano.ano>=2013
const arrayResultante= carro.filter(corCarro).filter(anoCarro)
console.log(arrayResultante)
