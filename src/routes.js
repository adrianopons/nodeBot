const express = require("express");
const routes = express.Router();

const BotController = require("./app/controller/BotController");

routes.post("/bots", BotController.store);
routes.get("/bots", BotController.index);



// routes.put("/bots", BotController.index);
// routes.delete("/bots", BotController.index);


// routes.get("/messages", function(req, res) {
//   return res.send("Atualizar mensagem");
// });

// routes.post("/bots", function(req, res) {
//   return res.send("Apagar mensagem");
// });

module.exports = routes;