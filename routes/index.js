const router = require("express").Router();
const userRoutes = require("./users");
const authRoutes = require("./auth");
const authenticate = require("../middlewares/authenticate");

router.use("/users", authenticate, userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
