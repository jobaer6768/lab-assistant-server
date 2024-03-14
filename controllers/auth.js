const authService = require("../services/auth");

const registerController = async (req, res, next) => {
  const { name, studentID, email, password, phoneNumber } = req.body;

  //   validation
  if (!name || !studentID || !email || !password) {
    res.status(400).json({ message: "Invalid data" });
  }

  try {
    const user = await authService.registerService({
      name,
      studentID,
      email,
      password,
    });

    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    next(error);
  }
};

module.exports = { registerController };
