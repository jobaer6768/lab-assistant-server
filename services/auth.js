const bcrypt = require("bcryptjs");
const error = require("../utils/error");
const userService = require("./user");

const registerService = async ({
  name,
  studentID,
  email,
  password,
}) => {
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
  });
};

module.exports = { registerService };
