const valores = [8, 7, 8]; //arrays em js podem aceitar qualquer tipo e nao tem tamanho fixo
const valor02 = ["ola", 8, 10, "hello world"]; //aceitar valores de tipos diferentes

console.log(valor02[01], valor02[0]);

console.log(valores[5]); //em java ele daria erro pois essa posiçao não existe, aqui não!

valores[8] = 20; //setando valor em meu array

console.log(valores); //para imprimir só basta passar o array

console.log(valores.length); //vai me mostrar quantos elementos tem conatndo com os vazios

valores.push("zero", "ola", 56); //adicionar elementos ao array
console.log(valores);

console.log(valores.pop()) // ela vai tirar o ultimo valor do array e me retornar e retira do array

delete valores[0] //vai remover o indice que eu passar do array