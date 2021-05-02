const Bot = require("../model/Bot");

class BotController {
  //post
  async store(req, res) {
    const data = await Bot.create(req.body);

    return res.json(data);
  }
  //get
  async index(req, res) {
    const data = await Bot.find({id: req.query.id});

    return res.json(data);
  }
}

module.exports = new BotController();