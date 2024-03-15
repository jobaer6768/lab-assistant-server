const router = require("express").Router();
const softwareController = require("../controllers/software");

/**
 * Get user by id or email
 */
router.get("/:deviceId", softwareController.getDeviceByID);

/**
 * Update user by id
 * @method PATCH
 */
router.patch("/:deviceId", softwareController.patchDeviceByID);

/**
 * Delete user by id
 */
router.delete("/:deviceId", softwareController.deleteDeviceByID);

/**
 * Get all users
 * @method GET
 * @visibility Private
 */
router.get("/", softwareController.getDevices);

/**
 * create a new user
 */
router.post("/", softwareController.postDevice);

module.exports = router;
