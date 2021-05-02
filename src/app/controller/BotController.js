const Bot = require("../model/Bot");

class BotController {
  //post
  async store(req, res) {
    const data = await Bot.create(req.body);

    return res.json(data);
  }
  //get
  async index(req, res) {
    const data = await Bot.find({id: req.params.id});
    let dataNoFormato = {};

    if (data[0])
      dataNoFormato = { id: data[0].id, name: data[0].name }

    return res.json(dataNoFormato);
  }

  //put
  async update(req, res) {
    const newData = req.body;
    const retorno = {status: false, motivo: 'Objeto Bot não foi enviado'};

    if (newData.id) {
      await Bot.updateOne({ id: newData.id }, newData, (err, raw) => {
        if (err) {
          retorno.motivo = err;
        } else {
          retorno.motivo = raw;

          if (raw.nModified > 0) 
            retorno.status = true;
        }
      });
    }

    return res.json(retorno);
  }
  
  //delete
  async delete(req, res) {
    const idToDelete = req.params.id;
    const retorno = {status: false, motivo: "Nenhum ID enviado"};

    if (idToDelete) {
      await Bot.deleteOne({ id: idToDelete }, null, (err, raw) => {
        if (err) {
          retorno.motivo = err;
        } else {
          retorno.motivo = raw;

          if (raw.deletedCount > 0) 
            retorno.status = true;
        }
      });
    }

    return res.json(retorno);
  }
}

module.exports = new BotController();