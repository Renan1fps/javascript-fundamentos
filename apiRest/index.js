const { urlencoded } = require("express");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/games", (req, res) => {
  res.statusCode = 200;
  res.json(DB.games);
});

app.get("/games/:id", (req, res) => {
  var idrequest = req.params.id;

  if (isNaN(idrequest)) {
    res.sendStatus(400);
  } else {
    var id = parseInt(idrequest);
    var game = DB.games.find((g) => g.id == id);
    if (game != undefined) {
      res.statusCode = 200;
      res.json(game);
    } else {
      res.sendStatus(404);
    }
  }
});

//banco de dados falso
var DB = {
  games: [
    {
      id: 23,
      name: "Call of duty",
      year: 2019,
      price: 200,
    },
    {
      id: 45,
      name: "Pubg",
      year: 2017,
      price: 78,
    },
    {
      id: 278,
      name: "Euro truck",
      year: 2011,
      price: 10,
    },
  ],
};

app.listen(8080, (erro) => {
  if (erro) {
    console.log("Error!");
  } else {
    console.log("Servidor rodando!");
  }
});
