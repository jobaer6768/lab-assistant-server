const router = require("express").Router();
const userRoutes = require("./users");
const authRoutes = require("./auth");
const labRoutes = require("./labs");
const authenticate = require("../middlewares/authenticate");

router.use("/users", authenticate, userRoutes);
router.use("/auth", authRoutes);
router.use("/labs", labRoutes);

module.exports = router;
