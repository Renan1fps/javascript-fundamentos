class Filme {
  //atributos, sempre usar this e nome = this.nome es empre dentro do construtor
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
