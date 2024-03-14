const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db");
const routes = require("./routes");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

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
