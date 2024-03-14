const authService = require("../services/auth");
const error = require("../utils/error");

const registerController = async (req, res, next) => {
  const { name, studentID, email, password, roles } = req.body;

  //   validation
  if (!name || !studentID || !email || !password) {
    throw error("Invalid data", 400);
  }

  try {
    const user = await authService.registerService({
      name,
      studentID,
      email,
      password,
      roles,
    });

    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    next(error);
  }
};

module.exports = { registerController };
