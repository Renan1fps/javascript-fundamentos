const avo = {
  atributo: "a",
};

const pai = {
  __proto__: avo, //aqui estou criando uma referencia para avo (definindo que pai está herdando atibutos, metodos de avo)

  atributo2: "b",
};

const filho = {
  __proto__: pai, //o mesmo acontece aqui, estou herdando de pai e avo ja que pai herda de avo
  atributo3: "c",
};

console.log(filho.atributo);

const pessoa = {
  nome: "leo",
  cpf: "066.676.125-60",
  numero: "(79)996901491",
};

const funcionario = {
  __proto__: pessoa,
  id: "5465123",
};

funcionario.nome = "renan";
console.log(funcionario.nome);

//posso estabeler a relaçao entre duas classes da seguinte forma também:
Object.setPrototypeOf(funcionario, pessoa); //primeiro a classe que vai herdar e depois a classe mãe
