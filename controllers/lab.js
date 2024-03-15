const labService = require("../services/lab");

const getUsers = async (req, res, next) => {
  try {
    const labs = await labService.findUsers();

    return res.status(200).json(labs);
  } catch (error) {
    next(error);
  }
};

const postUser = async (req, res, next) => {
  const { name, image } = req.body;

  try {
    const lab = await labService.createNewUser({
      name,
      image,
    });

    return res.status(201).json(lab);
  } catch (error) {
    next(error);
  }
};

module.exports = { postUser, getUsers };
