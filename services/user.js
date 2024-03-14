const User = require("../models/User");
const error = require("../utils/error");

const findUserByProperty = (key, value) => {
  if (key === "_id") {
    return User.findById(value);
  }

  return User.findOne({ [key]: value });
};

const createNewUser = ({ name, studentID, email, password, phoneNum }) => {
  const user = new User({
    name,
    studentID,
    email,
    password,
    phoneNum,
  });
  return user.save();
};

module.exports = { findUserByProperty, createNewUser };
