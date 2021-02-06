const pessoasAprovada = ["Ana", "João", "Marcelo", "Araos"];

pessoasAprovada.forEach(function (nome, indice) {//passo uma fução que desejo para meu forEach
  console.log(`${indice + 1}) ${nome}`);
});


const exibirAprovados= nome=>console.log(nome)

pessoasAprovada.forEach(exibirAprovados)

