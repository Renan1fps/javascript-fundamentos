const pessoa = {
  nome: "renan",
  idade: 20,
  cpf: "522.125.785-78",
  somar(a, b, c) {
    return a + b + c;
  },
};

console.log(JSON.stringify(pessoa)); //converte para JSON e metodos nao são convertidos. somente dados

console.log(JSON.parse('{"a":1, "b":2, "c": "ola"}'))//convertendo json para js
