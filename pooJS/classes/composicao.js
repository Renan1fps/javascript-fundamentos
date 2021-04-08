class Ler {
  leitura() {
    console.log("Lendo");
  }
}

class Deletar {
  Deleta() {
    console.log("Deletando");
  }
}

class Escritor {
  Escrever() {
    console.log("Escrevendo");
  }
}

class ManipuladorArquivo {
  constructor(nome) {
    this.arquivo = nome;
    this.ler = new Ler();
    this.deletar = new Deletar();
    this.escrever = new Escritor();
  }
}

var manipularArquivo = new ManipuladorArquivo("arquivo.txt");

manipularArquivo.deletar.Deleta();
manipularArquivo.ler.leitura();
manipularArquivo.escrever.Escrever();
