const pessoa = {
  nome: "iury",
  idade: 22,
  peso: 60,
};

console.log(Object.keys(pessoa)); //irá me retornar as chaves (atibutos dentro de minha classe)
console.log(Object.values(pessoa)); // irá me retonar os valores dos atributos
console.log(Object.entries(pessoa)); // irá me retonar um array com as chaves e os valores delas

Object.defineProperty(pessoa, "dataDeNascimento", {
  //criar um atributo e define suas propriedades
  enumerable: true, //ele pode ser listado quando chamar keys?
  writable: false, //pode ser modificado?
  value: "20/10/2000", //valor padrão
});

pessoa.dataDeNascimento = "09/03/2000"; //como eu define que ela nao pode ser modificada, vai ser ignorado o novo valor

console.log(pessoa.dataDeNascimento);

//ES6

const destino = { a: 5 };
const a2 = { a: 1, b: 2 };
const a3 = { c: 3, d: 4 };
const a4 = Object.assign(destino, a2, a3); //o primeiro objeto vai receber os demais e os que tiverem atributos iguais serão sobescritos

console.log(a4);
