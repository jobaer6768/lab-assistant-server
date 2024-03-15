const { model, Schema } = require("mongoose");

const softwareSchema = new Schema({
  deviceName: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  processor: {
    type: String,
    required: true,
  },
  processorBrand: {
    type: String,
    required: true,
  },
  processorType: {
    type: String,
    required: true,
  },
  processorModel: {
    type: String,
    required: true,
  },
  processorBaseFrequency: {
    type: String,
    required: true,
  },
  processorCore: {
    type: String,
    required: true,
  },
  processorThread: {
    type: String,
    required: true,
  },
  generation: {
    type: String,
    required: true,
  },
  ram: {
    type: String,
    required: true,
  },
  installedRamDetails: {
    type: String,
    required: true,
  },
});

const Software = model("User", softwareSchema);
module.exports = Software;
