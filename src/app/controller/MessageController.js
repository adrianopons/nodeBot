const Message = require("../model/Message");
var ObjectId = require('mongoose').Types.ObjectId;


class MessageController {
  //post
  async store(req, res) {
    const data = await Message.create(req.body);

    return res.json(data);
  }

  //get
  async index(req, res) {
    let data = null;
    
    if (req.params.id) {
      data = await Message.find({ _id: req.params.id });
    }

    return res.json(data[0]);
  }

  //get
  async getAllFromConvesationid(req, res) {
    let data = null;

    if (req.query.conversationId) {
      data = await Message.find({ conversationId: req.query.conversationId }, (err, raw) => {
        console.log(err);
        console.log(raw);
      });
    }

    return res.json(data);
  }


}

module.exports = new MessageController();