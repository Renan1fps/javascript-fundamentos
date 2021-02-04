console.log(somar(3,9))

//function declaration <--essa eu posso usar antes mesmo de declarar exeplo acima
function somar(x y) {
  return x + y;
}

//function expression
const somar2 = function (x, y) {
  return x + y;
};

//named function expression
const somar3 = function somar3(x, y) {
  return x + y;
};
