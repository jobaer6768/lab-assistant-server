const router = require("express").Router();
const userController = require("../controllers/user");

/**
 * Get user by id or email
 */
router.get("/:userId", userController.getUserByID);

/**
 * Update user by id
 * @method PUT
 */
router.put("/:userId", userController.putUserById);

/**
 * Update user by id
 * @method PATCH
 */
router.patch("/:userId", userController.patchUserById);

/**
 * Delete user by id
 */
router.delete("/:userId", userController.deleteUserById);

/**
 * Get all users
 * @method GET
 * @visibility Private
 */
router.get('/', userController.getUsers);

/**
 * create a new user
 */
router.post('/', userController.postUser);

module.exports = router;
