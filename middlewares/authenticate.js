const jwt = require("jsonwebtoken");
const User = require("../models/User");

async function authenticate(req, res, next) {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
      //   throw error("Unauthorized", 401);
    }

    token = token.split(" ")[1];
    const decoded = jwt.verify(token, "secret-key");

    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
      //   throw error("Unauthorized", 401);
    }

    req.user = user;
    next();
  } catch (e) {
    return res.status(400).json({ message: "Invalid token" });
    // throw error("Invalid token", 400);
  }
}

module.exports = authenticate;
