const mongoose = require("mongoose");
const uuid = require('node-uuid');

const Schema = mongoose.Schema;
const BotSchema = new Schema(
  {
		_id: {
      type: String,
			default: function () {
				return uuid.v1();
			}
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