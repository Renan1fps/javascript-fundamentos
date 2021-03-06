const express = require("express");
const app = express();
var session = require("express-session");
var flash = require("express-flash");
var cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.json());
app.use(cookieParser("20030927"));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);
app.use(flash());

app.get("/", (request, response) => {
  var nomeError = request.flash("nomeError");
  response.render("index",{nomeError});
});

app.post("/form", (request, response) => {
  var { email, nome, pontos } = request.body;

  //faço a validação que quiser
  var nomeValidacao = "renan";
  if (nome != nomeValidacao) {
    var nomeError = "Nome Errado!";
    request.flash("nomeError", nomeError);
    response.redirect("/");
  }
  response.send(email);
});

app.listen(8181, () => {
  console.log("Server running");
});
