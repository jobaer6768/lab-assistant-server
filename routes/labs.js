const router = require("express").Router();
const labController = require("../controllers/lab");

router.get("/", labController.getUsers);
router.post("/", labController.postUser);

module.exports = router;
