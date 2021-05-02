const express = require("express");
const routes = express.Router();

routes.get("/", function(req, res) {
  return res.send("Ler mensagens");
});

routes.post("/", function(req, res) {
  return res.send("Enviar mensagem");
});

routes.patch("/", function(req, res) {
  return res.send("Atualizar mensagem");
});

routes.delete("/", function(req, res) {
  return res.send("Apagar mensagem");
});

module.exports = routes;