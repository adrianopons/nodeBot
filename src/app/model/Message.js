const mongoose = require("mongoose");
const uuid = require('node-uuid');

const Schema = mongoose.Schema;
const MessageSchema = new Schema(
  {
		_id: {
      type: String,
			default: function () {
				return uuid.v1();
			}
		},
		conversationId: {
      type: String,
      required: true
    },
		timestamp: {
      type: String,
      required: true
    },
    from: {
      type: String,
      required: true
    },
		to: {
      type: String,
      required: true
    },
		text: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Message", MessageSchema);