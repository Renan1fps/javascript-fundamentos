class Filme {
  //atributos, sempre usar this e nome = this.nome e sempre dentro do construtor
  constructor() {
    this.titulo = "";
    this.ano = 2000;
    this.genero = "";
    this.diretor = "";
    this.atores = [];
    this.duracao = 0;
  }

  //metodos são funções
  Reproduzir() {
    console.log("Reproduzindo");
  }
  Pausar() {
    console.log("Pausar");
  }
  Avancar() {
    console.log("Avançar");
  }
  Fechar() {
    console.log("Fechar");
  }
}

var vingadores = new Filme();
var starWars = new Filme();
var theLastNaruto = new Filme();

//setando atributos

starWars.titulo = "Império contra ataca";
starWars.genero = "Ficção, drama, guerra";
starWars.ano = 2000;

console.log(starWars)
