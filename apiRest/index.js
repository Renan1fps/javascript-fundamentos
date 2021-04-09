const { urlencoded } = require("express");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/games", (req, res) => {
  res.statusCode = 200;
  res.json(DB.games);
});

app.get("/game/:id", (req, res) => {
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

app.post("/game", (req, res) => {
  var { title, year, price } = req.body;
  DB.games.push({
    id: 25,
    title,
    year,
    price,
  });
  res.sendStatus(200);
});

app.delete("/game/:id", (req, res) => {
  var idparams = req.params.id;
  if (isNaN(idparams)) {
    res.sendStatus(400);
  } else {
    var id = parseInt(idparams);
    var index = DB.games.findIndex((g) => g.id == id);
    if(index==-1){
      res.sendStatus(404)
    }else{
      DB.games.splice(index,1);
      res.sendStatus(200)
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
