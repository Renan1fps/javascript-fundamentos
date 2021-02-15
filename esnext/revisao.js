//ES8: Object.values = me retornar todos os atributos do objeto
//ES8: Object.entries=

const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj));

//ES8

console.log(Object.entries(obj)); //irá me retonar uma matriz contendo os atributos e seus valoes

//Class
class Animal {
  hasAsas = "false";
}

class Gato extends Animal {
  nome = "gato";

  falar() {
    return "miau";
  }
}

console.log(new Gato().nome, new Gato().falar())// quando usado o class é preciso instanciar usando new
