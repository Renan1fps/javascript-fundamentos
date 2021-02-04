const notas = [9, 5, 6, 7, 8, 5, 5.4, 8.6, 4, 2.5];

//sem callback
let notasBaixas = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i]);
  }
}
console.log(notasBaixas);


//com callback
const notasBaixas2 = notas.filter(function (notas) {
  return notas < 7;
});
console.log("Notas baixas 2:", notasBaixas2);


//com arrow function
const notasBaixas3 = notas.filter((notas) => notas < 7);
console.log("notas baixas 3:", notasBaixas3);
