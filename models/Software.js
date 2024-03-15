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
  RAM: {
    type: String,
    required: true,
  },
  installedRAMDetails: {
    type: String,
    required: true,
  },
  RAMType: {
    type: String,
    required: true,
  },
  RAMBus: {
    type: String,
    required: true,
  },
  totalRAMSlot: {
    type: String,
    required: true,
  },
  emptyRAMSlot: {
    type: String,
    required: true,
  },
  storage: {
    type: String,
    required: true,
  },
  installedHDDType: {
    type: String,
    required: true,
  },
  installedSSDType: {
    type: String,
    required: true,
  },
  speaker: {
    type: String,
    required: true,
  },
  microphone: {
    type: String,
    required: true,
  },
  webCam: {
    type: String,
    required: true,
  },
  keyboard: {
    type: String,
    required: true,
  },
  mouse: {
    type: String,
    required: true,
  },
  operatingSystem: {
    type: String,
    required: true,
  },
});

const Software = model("Software", softwareSchema);
module.exports = Software;
