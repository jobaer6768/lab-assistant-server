const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
console.log(process.env.PORT);

app.get("/", (_req, res) => {
  res.json({ message: "Home Route" });
});

app.listen(PORT, () => {
  console.log(` server is listening on port ${PORT}`);
});
