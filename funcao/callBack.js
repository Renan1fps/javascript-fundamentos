const carros = ["volvo", "audi", "chevrolet", "audi"];

 function imprimir (marca, indice) {
  console.log(`${indice + 1}, ${marca}`);
};

carros.forEach(imprimir);
