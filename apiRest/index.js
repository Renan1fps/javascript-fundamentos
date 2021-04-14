const { urlencoded } = require("express");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
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
    if (index == -1) {
      res.sendStatus(404);
    } else {
      DB.games.splice(index, 1);
      res.sendStatus(200);
    }
  }
});

app.put("/game/:id", (req, res) => {
  var idrequest = req.params.id;
  if (isNaN(idrequest)) {
    res.sendStatus(400);
  } else {
    var id = parseInt(idrequest);
    var game = DB.games.find((g) => g.id == id);
    if (game != undefined) {
      var { title, year, price } = req.body;

      if (title != undefined) {
        game.title = title;
      }
      if (year != undefined) {
        game.year = year;
      }
      if (price != undefined) {
        game.price = price;
      }
      res.sendStatus(200);
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
      title: "Call of duty",
      year: 2019,
      price: 200,
    },
    {
      id: 45,
      title: "Pubg",
      year: 2017,
      price: 78,
    },
    {
      id: 278,
      title: "Euro truck",
      year: 2011,
      price: 10,
    },
  ],
  users: [
    {
      id: 1,
      name: "Renan Oliveira",
      password: "123456",
      email: "renan@gmail.com",
    },
    {
      id: 2,
      name: "Lucas Nascimento",
      password: "shingeki no kyojin",
      email: "lucas@gamil.com",
    },
  ],
};

app.post("/auth", (req, res) => {
  var { email, password } = req.body;

  if (email != undefined) {
    var userReq = DB.users.find((user) => user.email == email);

    if (userReq != undefined) {
      if (userReq.password == password) {
        res.status(200);
        res.json({ token: "Token falso" });
      } else {
        res.status(401);
        res.json({ err: "Credencias invalidas" });
      }
    } else {
      res.status(404)
      res.json({ err: "Email não encontrado!" });
    }
  } else {
    res.status(400);
    res.json({ err: "Email invalido!" });
  }
});

app.listen(8080, (erro) => {
  if (erro) {
    console.log("Error!");
  } else {
    console.log("Servidor rodando!");
  }
});
