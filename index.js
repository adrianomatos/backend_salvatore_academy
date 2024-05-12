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
  res.send(lista[id - 1]);
});

// Sinalisando que express está usando JSON
app.use(express.json());

// ENDPOINT Create POST /personagens
app.post("/personagens", function (req, res) {
  const body = req.body;
  const novoItem = body.nome;
  lista.push(novoItem);
  res.send("Ítem add com sucesso: " + novoItem);
});

// ENDPOINT Update PUT /personagens
app.put("/personagens/:id", function (req, res) {
  const id = req.params.id; // Acessando o parâmetro ID da rota
  const body = req.body; // Acessando o BODY da requisição
  const novoItem = body.nome; // Acessando propriedade nome do body
	lista[id - 1] = novoItem; // Atualisamos na lista pelo ID - 1
  res.send("Ítem add com sucesso: " + id + ' - ' + novoItem);
});

// SERVIDOR OUVINDO
app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
