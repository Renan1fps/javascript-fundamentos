class Dado {
  constructor(faces) {
    this.faces = faces;
  }

  Rolar() {
    console.log("Numero aleatorio: " + this.GetRandomInclusive(1, this.faces));
  }
  GetRandomInclusive(min, max) {
    Math.ceil(min);
    Math.max(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

var dado = new Dado(50);

dado.Rolar();
