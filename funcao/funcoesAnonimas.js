const soma = function (a, b) {
  return a + b;
};

const imprimeResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};

imprimeResultado(10, 6);
imprimeResultado(2, 8, (a, b) => a + b); //passando uma arrow function como parametro ao inves de soma, o que é possivel tambem.
