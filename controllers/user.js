const userService = require("../services/user");
const authService = require("../services/auth");

const getUserByID = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await userService.findUserByProperty("_id", userId);
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const getUsers = async (_req, res, next) => {
  try {
    const users = await userService.findUsers();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const postUser = async (req, res, next) => {
  const { name, studentID, email, password, roles } = req.body;

  try {
    const user = await authService.registerService({
      name,
      studentID,
      email,
      password,
      roles,
    });

    return res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const putUserById = async (req, res, next) => {
  const { userId } = req.params;
  const { name, studentID, email, roles } = req.body;

  try {
    const user = await userService.updateUser(userId, {
      name,
      email,
      roles,
      studentID,
    });

    if (!user) {
      throw error("User not found", 404);
    }

    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

const patchUserById = async (req, res, next) => {
  const { userId } = req.params;
  const { name, roles, studentID, email } = req.body;

  try {
    const user = await userService.findUserByProperty("_id", userId);

    if (!user) {
      throw error("User not found", 404);
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;
    user.roles = roles ?? user.roles;
    user.studentID = studentID ?? user.studentID;

    await user.save();
    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

const deleteUserById = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const user = await userService.findUserByProperty("_id", userId);

    if (!user) {
      throw error("User not found", 404);
    }

    await user.deleteOne();
    return res.status(203).send();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getUsers,
  getUserByID,
  postUser,
  putUserById,
  patchUserById,
  deleteUserById,
};
