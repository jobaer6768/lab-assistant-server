const router = require("express").Router();

router.get("/", (_req, res) => {
  res.json({ message: "Users Route" });
});

module.exports = router;
