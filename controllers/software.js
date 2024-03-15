const softwareService = require("../services/software");

const getDeviceByID = async (req, res, next) => {
  try {
    const deviceId = req.params.deviceId;
    const device = await softwareService.findDeviceByProperty("_id", deviceId);
    return res.status(200).json(device);
  } catch (error) {
    next(error);
  }
};

const getDevices = async (_req, res, next) => {
  try {
    const devices = await softwareService.findDevices();
    return res.status(200).json(devices);
  } catch (error) {
    next(error);
  }
};

const postDevice = async (req, res, next) => {
  const {
    deviceName,
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
  } = req.body;

  try {
    const device = await softwareService.createNewDevice({
      deviceName,
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
    });

    return res.status(201).json(device);
  } catch (error) {
    next(error);
  }
};

const patchDeviceByID = async (req, res, next) => {
  const { deviceId } = req.params;
  const {
    deviceName,
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
  } = req.body;

  try {
    const device = await softwareService.findDeviceByProperty("_id", deviceId);

    if (!device) {
      throw error("device not found", 404);
    }

    device.deviceName = deviceName ?? device.deviceName;
    device.brand = brand ?? device.brand;
    device.processor = processor ?? device.processor;
    device.processorBrand = processorBrand ?? device.processorBrand;
    device.processorType = processorType ?? device.processorType;
    device.processorModel = processorModel ?? device.processorModel;
    device.processorBaseFrequency =
      processorBaseFrequency ?? device.processorBaseFrequency;
    device.processorCore = processorCore ?? device.processorCore;
    device.processorThread = processorThread ?? device.processorThread;
    device.generation = generation ?? device.generation;
    device.RAM = RAM ?? device.RAM;
    device.installedRAMDetails =
      installedRAMDetails ?? device.installedRAMDetails;
    device.RAMType = RAMType ?? device.RAMType;
    device.RAMBus = RAMBus ?? device.RAMBus;
    device.totalRAMSlot = totalRAMSlot ?? device.totalRAMSlot;
    device.emptyRAMSlot = emptyRAMSlot ?? device.emptyRAMSlot;
    device.storage = storage ?? device.storage;
    device.installedHDDType = installedHDDType ?? device.installedHDDType;
    device.installedSSDType = installedSSDType ?? device.installedSSDType;
    device.speaker = speaker ?? device.speaker;
    device.microphone = microphone ?? device.microphone;
    device.webCam = webCam ?? device.webCam;
    device.keyboard = keyboard ?? device.keyboard;
    device.mouse = mouse ?? device.mouse;
    device.operatingSystem = operatingSystem ?? device.operatingSystem;

    await device.save();
    return res.status(200).json(device);
  } catch (e) {
    next(e);
  }
};

const deleteDeviceByID = async (req, res, next) => {
  const { deviceId } = req.params;

  try {
    const device = await softwareService.findDeviceByProperty("_id", deviceId);

    if (!device) {
      throw error("device not found", 404);
    }

    await device.deleteOne();
    return res.status(203).send();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getDevices,
  getDeviceByID,
  postDevice,
  patchDeviceByID,
  deleteDeviceByID,
};
