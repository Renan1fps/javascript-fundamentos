class Filme {
  //atributos, sempre usar this e nome = this.nome e sempre dentro do construtor
  constructor(titulo,ano,genero,diretor,duracao) {
    this.titulo = titulo;
    this.ano = ano;
    this.genero = genero;
    this.diretor = diretor
    this.atores = [];
    this.duracao = duracao;
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

var naruto= new Filme("Prisão de sangue",2008,"anime","masaki Kishimoto","2h");
console.log(naruto)

