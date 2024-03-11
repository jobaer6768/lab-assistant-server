const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (_req, res) => {
  res.json({ message: "Home Route" });
});

app.listen(PORT, () => {
  console.log(` server is listening on port ${PORT}`);
});
