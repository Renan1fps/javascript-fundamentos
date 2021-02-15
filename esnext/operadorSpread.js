//como usar o operador spread com objetos

const pessoa = { nome: "renan", cpf: "456.123.789-89" };
const clone = { isAtivo: true, ...pessoa }; // no ...pessoa ele irá clonar os atributos de pessoa para o obj clone

console.log(clone);

//usando spread com arrays

const alunos = ["iury", "jhonatan", "leo"];

const spread = ["renan", "araos", ...alunos];
spread.sort();

console.log(spread)
