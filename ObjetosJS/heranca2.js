const pai = {
  nome: "renan",
  corCabelo: "preto",
};

//outra forma de criar uma classe fazendo ela herdar comportamentos de outra é com create:

const filha = Object.create(pai);
filha.nome = "Hinata";
console.log(filha.corCabelo);
console.log(filha.nome);

for (let key in filha) { //para saber os atributos dessa classe/objeto
    console.log(key)
}

