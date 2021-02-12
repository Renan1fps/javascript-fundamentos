const porta = 8080;
const express = require("express");

const app = express();

app.get("/produtos", (req, res, next) => {
  res.send({ produto: "notebook", valor: 2400.0 });
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
