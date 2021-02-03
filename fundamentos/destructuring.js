const pessoa = {
  nome: "renan",
  idade: 20,
  endereço: {
    rua: "alameda dos eucaliptos",
    numero: 1213,
  },
};

/*agora o operador destructuring que funciona da seguinte forma
ele vai pegar os atributos que estao em meu objecto e vai criar
variaveis com o mesmo nome ou não, basicamente ele está tirando
do objeto e criando variaveis fora do objeto.
*/

const { nome, idade } = pessoa;
console.log(nome, idade)
