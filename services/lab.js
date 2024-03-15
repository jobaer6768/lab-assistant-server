const Lab = require("../models/Lab");

const findUsers = () => {
  return Lab.find();
};

const createNewUser = ({ name, image }) => {
  const lab = new Lab({
    name,
    image,
  });

  return lab.save();
};

module.exports = { createNewUser, findUsers };
