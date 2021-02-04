function Carro(velocidadeMaxima = 200, delta = 50) {
  //atributo privado com let ou const se quiser publico usar this
  let velocidadeAtual = 0;

  //metodo publico
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };

  //metodo publico
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}

const fox = new Carro(50, 10); //passando parametros
fox.acelerar();
fox.acelerar();
fox.acelerar();
fox.acelerar();
console.log(fox.getVelocidadeAtual());

const camaro = new Carro(); //usando valores padroes definidos
camaro.acelerar();
camaro.acelerar();
console.log(camaro.getVelocidadeAtual());
