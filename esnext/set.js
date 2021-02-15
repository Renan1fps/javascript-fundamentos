//estrutura parecida com a coleção Set do java nao aceita repetiçoes

const { set } = require("lodash");

const time1 = "Corinthians";
const time2 = "Vasco";
const time3 = "Internacional";
const time4 = "Santos";
const time5 = "São Paulo";
const time6 = "Gremio";

const times = new Set();
times.add(time1);
times.add(time2);
times.add(time3);
times.add(time4);
times.add(time5);
times.add(time6);

console.log(times);
console.log(times.has("Vasco"));
times.delete("São Paulo");
console.log(times);

//set vindo de um array

const nomes = ["raquel", "araos", "fabio santos", "araos"];

const nomesSemRepeticao = new Set(nomes);
console.log(nomesSemRepeticao)//exluiu os nomes repetidos do array

