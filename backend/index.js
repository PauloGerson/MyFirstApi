const express = require("express");
const cors = require("cors");
const { v4: uuid } = require("uuid");

const app = express();

app.use(cors());

app.use(express.json());

const produtos = [
  {
    id: uuid(),
    name: "paulo",
    password: "123",
  },
];

app.get("/api", (request, response, next) => {
  response.status(200).json(produtos);
});

app.post("/api", (request, response, next) => {
  const { name, password } = request.body;

  const data = {
    id: uuid(),
    name,
    password,
  };

  produtos.push(data);

  response.json({ message: "Salvo" });
});

app.listen(3002, () => console.log("Rodando na porta 3002"));
