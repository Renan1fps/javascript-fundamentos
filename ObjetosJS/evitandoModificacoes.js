const pessoa = Object.preventExtensions({
  //ele cria o objeto e nao deixa que eu adicione mais atributos de classe, mas posso fazer outras modificaçoes
  nome: "renan",
  idade: 20,
  sexo: "masculino",
});

pessoa.nome = "naruto";
pessoa.idade = 33;

console.log(pessoa);

const carro = {
  nome: "fox",
  ano: 2015,
};
Object.seal(carro)//nao poderei adicionar atributos e nem removelos mas posso alterar os valores dos atributos

//e tambem tem o Object.freeze= seal+valores de atributos constantes
