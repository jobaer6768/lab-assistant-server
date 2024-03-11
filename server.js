const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (_req, res) => {
  res.json({ message: "Home Route" });
});

app.listen(PORT, () => {
  console.log(` server is listening on port ${PORT}`);
});