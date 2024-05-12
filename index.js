// CRIA APLICAÇÃO USANDO EXPRESS
const express = require("express");
const app = express();

//  ENDPOINT PRINCIPAL
app.get("/", function (req, res) {
  res.send("Hello World Nodemon!");
});

// SERVIDOR  OUVINDO
app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
