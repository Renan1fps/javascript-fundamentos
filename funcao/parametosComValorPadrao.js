function soma(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}

/*nota: se voce nao passar valores no parametro
ele iria retornar o valor padrao (1) que foi definido
mas tomar cuidado com 0 pois ele pode gerar um bug
e retornar o valor padrao (1)
*/
console.log(soma(2, 3, 5));
console.log(soma(3));
console.log(soma(0, 0, 0)); //tomar cuidado com esse tipo de parametro
console.log(soma());
console.log('---------------')
//jeito certo es2015

function soma(a = 1, b = 1, c = 1) {
  return a + b + c;
}

console.log(soma(3,2,9))
console.log(soma())
console.log(soma(3))
console.log(soma(0,0,0))

