const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const multer = require("multer");

app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, ".");
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single("arquivo");
app.post("/upload", (req, res) => {
  upload(req, res, err => {
    if (err) {
      return res.end("ocorreu um erro.");
    }
    res.end('Concluído com sucesso!')
  });
});

app.listen(8087, () => console.log("Executando..."));
