const express = require("express");
const app = express();
var session = require("express-session")
var flash= require("express-flash")

app.set("view engine", "ejs");
app.use(express.json());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
app.use(flash())

app.get("/teste", (request, response) => {
  response.json({ message: "hello!" });
});

app.listen(8181, () => {
  console.log("Server running");
});
