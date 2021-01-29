function impimirSoma(a, b) {
  //sem retorno
  console.log(a + b);
}

impimirSoma(2, 2);

//funçao com retono

function somaDoisNumeros(a, b = 0) {//b está setado por padrão como zero
  return a + b;
}

console.log(somaDoisNumeros(1, 2));
