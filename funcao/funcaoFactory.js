 //ela tem a funçao de criar objetos ( tipo uma fabrica de objetos)
 function criarPessoa(){
     return{
         nome: 'renan',
         idade: 20,
         sexo: 'masculino'
     }
 }

 console.log(criarPessoa())