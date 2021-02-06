const carrinho = [//tenho um array de json e quero pegar somente os preços
  '{"nome": "lapis", "valor": 1.00}',
  '{"nome": "caderno", "valor": 13.00}',
  '{"nome": "estojo", "valor": 5.80}',
  '{"nome": "borracha", "valor": 0.50}',
];

const paraObjeto = (elemento) => JSON.parse(elemento); //primeiro fazemos o parse para objeto
const valores = (produto) => produto.valor;//em seguinda acessamos os elemetos desse objeto

const resultado = carrinho.map(paraObjeto).map(valores);
console.log(resultado);
