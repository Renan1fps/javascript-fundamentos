//promise que são usadas em programação async...depois de um tempo ela será usada

function resposta(tempo = 7000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("ola");
    }, tempo);
  });
}

resposta(8000).then((resultadoResposta) => console.log(resultadoResposta));
