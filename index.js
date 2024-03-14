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

app.use((err, _req, res, _next) => {
  console.log(err);

  const message = err.message ? err.message : "Server error Occured";
  const status = err.status ? err.status : 500;

  res.status(status).json({ message });
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
