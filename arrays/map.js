const numeros = [1, 2, 3, 4, 5];

let numeros2 = numeros.map(function (e) {
  return 2 * e;
});

console.log(numeros2);

let resultado = numeros.map(function (elemento) {
  return elemento * 10;
});
console.log(resultado);


const somar = (e) => e *10;
const concatenar = (e) => `${e},00`;
const exe3 = numeros.map(somar).map(concatenar);
console.log(exe3)
