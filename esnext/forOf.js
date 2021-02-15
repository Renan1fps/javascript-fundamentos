//parecida com o forI a diferença é que posso iterar sobre uma string, objeto, arrays...

const { CONNREFUSED } = require("dns");

//forOf
const nomePessoa = "Renan";

for (const letra of nomePessoa) {
  console.log(letra);
}

//for in que irá percorrer os indices

const arrayNome = ["Bruno", "Gabriel", "Rony", "Araos"];

for (const nomes in arrayNome) {
  console.log(nomes);
}

//agora usando o forOf (irá pegar o conteudo)
for (const resultado of arrayNome) {
    console.log(resultado);
  }

