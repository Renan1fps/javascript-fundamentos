const pessoa = {
  _idade: 20, //o _ é uma convenção, indica que pretendo deixar ele visivél somente aqui

  get idade() {
    return this._idade;
  },

  set idade(idade) {
    if (idade < 0) {
      console.log("idade invalida!");
    }else{this.idade = idade;}
    
  },
};
pessoa.idade=-1
console.log(pessoa.idade);
