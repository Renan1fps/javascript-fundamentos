//forma literal

const pessoa = {
  nome: "renan",
  idade: 20,
  sexo: "masculino",
};
console.log(pessoa);

//criando objetos com atributos dinamicos
const pessoa2 = {};
pessoa2.nome = "renan";
pessoa2.idade = 20;
console.log(pessoa2);

//criando objeto a partir do Objeto js
const pessoa3 = new Object();
pessoa3.nome = "leo";
console.log(pessoa3);

//função construtora
function Pessoa4(nome, idade, sexo) {
  this.nome = nome; //atributo public, idade e sexo são privados
  return nome, idade, sexo;
}

const p4 = new Pessoa4("renan", 20, "masculino");
console.log(p4);


//funçao factory
function criarPessoa(nome, idade, sexo) {
  return {
    nome,
    idade,
    sexo,
    //poderia criar funçoes também
  };
}
const cp= criarPessoa('joao', 45, 'm')
console.log(cp)
