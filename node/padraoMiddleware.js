//implementando o padrão de projeto middleware

const passo1 = (ctx, next) => {
  ctx.valor1 = "passo1";
  next();
};

const passo2 = (ctx, next) => {
  ctx.valor2 = "passo2";
  next();
};

const passo3 = (ctx) => {
  ctx.valor3 = "passo3";
};

const execucao = (ctx, ...funcoes) => {
  // o ... é um operador que junta tudo dentro de um array

  const executandoPassos = (indice) => {
    //o indice é a posiçao do meu array que foi formado com ...funcoes

    funcoes &&
      indice < funcoes.length &&
      funcoes[indice](ctx, () => executandoPassos(indice + 1));
  };
  executandoPassos(0);
};

const ctx = {};
execucao(ctx, passo1, passo2, passo3);
console.log(ctx);
