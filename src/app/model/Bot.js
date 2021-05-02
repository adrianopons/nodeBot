const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BotSchema = new Schema(
  {
		id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Bot", BotSchema);