// CRIA APLICAÇÃO USANDO EXPRESS
const express = require("express");
const app = express();

//  ENDPOINT PRINCIPAL
app.get("/", function (req, res) {
  res.send("Hello World Nodemon!");
});

// LISTA
const lista = ["Java", "Android", "Kotlin"];

// ENDPOINT Read All
app.get("/personagens", function (req, res) {
  res.send(lista);
});

// ENDPOINT Read By ID
app.get("/personagens/:id", function (req, res) {
	const id = req.params.id;
  res.send(lista[id]);
});

// SERVIDOR  OUVINDO
app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
