const User = require("../models/User");
const error = require("../utils/error");

const findUsers = () => {
  return User.find();
};

const findUserByProperty = (key, value) => {
  if (key === "_id") {
    return User.findById(value);
  }

  return User.findOne({ [key]: value });
};

const createNewUser = ({ name, studentID, email, password, roles }) => {
  const user = new User({
    name,
    studentID,
    email,
    password,
    roles: roles ? roles : "USER",
  });
  return user.save();
};

const updateUser = async (id, data) => {
  const user = await findUserByProperty("studentID", data.studentID);
  if (user) {
    throw error("student ID already in use", 400);
  }
  return User.findByIdAndUpdate(id, { ...data }, { new: true });
};

module.exports = { findUserByProperty, createNewUser, findUsers, updateUser };
