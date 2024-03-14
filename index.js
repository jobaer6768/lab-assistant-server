const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (_req, res) => {
  res.json({ message: "Home Route" });
});

connectDB(process.env.DB_URL_LOCAL)
  .then(() => {
    console.log("Database Connected!");

    app.listen(PORT, () => {
      console.log(` server is listening on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
