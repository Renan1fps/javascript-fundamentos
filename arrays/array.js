console.log(typeof Array, typeof new Array());

let aprovados = new Array("bia", "carlos", "ana"); //não muito recomendada
console.log(aprovados);

aprovados = ["barion", "joao", "adidas"]; //forma mais recomendada
console.log(aprovados);

//acessos são por indice
console.log(aprovados[0]);
console.log(aprovados[1]);

///acessar possiçoes que nao tem alemento algum sao undefined e nao da erro
console.log(aprovados[6]);

//colocar novos elementos dentro do array ou substituir
aprovados[3] = "paulo";
aprovados.push("marilia"); //colocar novo elemento
console.log(aprovados.length);

aprovados[9] = "rafael";
console.log(aprovados.length); //os valores antes de 9 que nao foram adicionados recebem undefined

console.log(aprovados); //ele vai ter 4 elementos vazios pq coloquei um elemento no indice 9

aprovados.sort(); //organizando minha lista
console.log(aprovados);

delete aprovados[1]; //essa posiçao irá receber undefined e nao será reorganizada
console.log(aprovados[1]);
console.log(aprovados);

aprovados = ["renan", "leo", "iury", "emerson"];
console.log(aprovados);

//aprovados.splice(1,2)//NO PRIMEIRO PARAMETRO ELE VAI PEGAR A PARTIR DALI E VAI EXCLUIR DEPOIS DELE O TANTO QUE EU PASSAR NO 2 PARAMETRO
aprovados.splice(1,2,'elemento1', 'elemento2')//aqui a partir do elemento 1 ele vai excluir dois (parametro 2) e depoois vai adiconar 2 elementos (parametro 3 posso mais que dois para serem add)
console.log(aprovados)
