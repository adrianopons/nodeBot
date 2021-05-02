const express = require("express");
const routes = express.Router();

const BotController = require("./app/controller/BotController");
const MessageController = require("./app/controller/MessageController");

routes.post("/bots", BotController.store);
routes.get("/bots/:id", BotController.index);
routes.put("/bots", BotController.update);
routes.delete("/bots/:id", BotController.delete);

routes.post("/messages", MessageController.store);
routes.get("/messages/:id", MessageController.index);
routes.get("/messages", MessageController.getAllFromConvesationid);

// routes.get("/messages", function(req, res) {
//   return res.send("Atualizar mensagem");
// });

// routes.post("/bots", function(req, res) {
//   return res.send("Apagar mensagem");
// });

module.exports = routes;