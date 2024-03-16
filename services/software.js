const Software = require("../models/Software");
const error = require("../utils/error");

const findDevices = () => {
  return Software.find();
};

const findDeviceByProperty = (key, value) => {
  if (key === "_id") {
    return Software.findById(value);
  }

  return Software.findOne({ [key]: value });
};

const createNewDevice = ({
  deviceName,
  image,
  brand,
  model,
  processor,
  processorBrand,
  processorType,
  processorModel,
  processorBaseFrequency,
  processorCore,
  processorThread,
  generation,
  RAM,
  installedRAMDetails,
  RAMType,
  RAMBus,
  totalRAMSlot,
  emptyRAMSlot,
  storage,
  installedHDDType,
  installedSSDType,
  speaker,
  microphone,
  webCam,
  keyboard,
  mouse,
  operatingSystem,
}) => {
  const software = new Software({
    deviceName,
    brand,
    model,
    image,
    processor,
    processorBrand,
    processorType,
    processorModel,
    processorBaseFrequency,
    processorCore,
    processorThread,
    generation,
    RAM,
    installedRAMDetails,
    RAMType,
    RAMBus,
    totalRAMSlot,
    emptyRAMSlot,
    storage,
    installedHDDType,
    installedSSDType,
    speaker,
    microphone,
    webCam,
    keyboard,
    mouse,
    operatingSystem,
  });
  return software.save();
};

const updateDevice = async (id, data) => {
  const device = await findDeviceByProperty("deviceName", data.deviceName);
  if (device) {
    throw error("student ID already in use", 400);
  }
  return device.findByIdAndUpdate(id, { ...data }, { new: true });
};

module.exports = {
  findDeviceByProperty,
  createNewDevice,
  findDevices,
  updateDevice,
};
