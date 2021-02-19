const express = require("express");
const app = express();
const body = require("body-parser");

app.use(body.urlencoded({ extended: true }));

app.post("/usuarios", (req, res) => {
  console.log(req.body);
  res.send('<h1>Nome cadastrado com sucesso!</h1>')
});

app.post("/usuarios/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  res.send('<h1>Nome alterado com sucesso!</h1>')
});

app.listen(8080)
