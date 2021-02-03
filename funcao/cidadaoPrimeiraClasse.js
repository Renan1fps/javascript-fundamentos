//criar funçao de forma literal
function f1() {}

//armazenar funçao em uma variável (funçao anonima)
const fun2 = function () {};

//Amazenar em um array
const array = [
  function (a, b) {
    return a + b;
  },
  f1,
  fun2,
];

console.log(array[0](2, 6)); //imprimindo a funçao dentro do array

//armazenar uma funçao em um atributo de objeto

const pessoa = {};
pessoa.falar = function () {
  return "oiiiii";
};

console.log(pessoa.falar());

//passar funçao como parametro para outra
function run(fun) {
  fun();
}

run(function () {
  console.log("funçao dentro de outra");
});

//uma funçao pode retornar/conster outra funçao

function somar(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}
somar(2,3)(5)
