const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const error = require("../utils/error");
const userService = require("./user");

const registerService = async ({ name, studentID, email, password, roles }) => {
  const user = await userService.findUserByProperty("studentID", studentID);

  //   check if the user already exists in the database or not
  if (user) throw error("User already exists", 400);

  //   hash the password before saving it to the database
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  return userService.createNewUser({
    name,
    studentID,
    email,
    password: hash,
    roles,
  });
};

const loginService = async ({ email, password }) => {
  const user = await userService.findUserByProperty("email", email);
  if (!user) throw error("Invalid Credential", 400);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw error("Invalid Credential", 400);

  const payload = {
    _id: user._id,
    name: user.name,
    email: user.email,
    roles: user.roles,
    studentID: user.studentID,
  };
  // TODO: Secret-key to be updated later
  return jwt.sign(payload, "secret-key", { expiresIn: "2h" });
};

module.exports = { registerService, loginService };
