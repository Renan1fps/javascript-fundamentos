const pilotos= ['alonso', 'vetel', 'massa', 'hamilton']
pilotos.pop()//remove o ultimo elemento do array


pilotos.push('Verstappen')//irá adicionar na ultima posição do array
console.log(pilotos)

pilotos.shift()//remove o primeiro elemento do meu array

pilotos.unshift('rubinho')//adiciona um elemento na primeira posição


pilotos.splice(2,0, 'bottas', 'senna')//antes do indice 2 (primeiro parametro), vou add bottas e senna e nao remover ninguem(segundo parametro)
console.log(pilotos)

const novoArray= pilotos.slice(2)//a partir do indice 2 de pilotos, novoArray irá receber o que vier de pilotos
console.log(novoArray)

const novoArray2= pilotos.slice(2,4)//irá pegar do indice 2(incluindo ele) até o 4 (o 4 não entra)

