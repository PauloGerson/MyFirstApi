const express = require("express");
const cors = require("cors");

const app = express();

app.listen(5500, () => console.log("Rodando na porta 5500"));

app.use(cors());

app.use(express.json());

const produtos = [
  {
    id: 123,
    name: "paulo",
    password: "123",
  },
];

app.get("/api", (req, res) =>
  res.json({
    produtos,
  })
);
