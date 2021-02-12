const porta = 8080;

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const bancoDeDadados = require("./bancoDeDados");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/produtos", (req, res, next) => {
  res.send(bancoDeDadados.getProdutos());
});

app.get("/produtos/:id", (req, res, next) => {
  res.send(bancoDeDadados.getProduto(req.params.id));
});

app.post("/produtos", (req, res, next) => {
  const produto = bancoDeDadados.salvarProdutos({
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto);
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
