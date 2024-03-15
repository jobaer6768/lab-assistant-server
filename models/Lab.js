const { model, Schema } = require("mongoose");

const labSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Lab = model("Lab", labSchema);
module.exports = Lab;
