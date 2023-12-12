const router = require("express").Router();

const {
  getAllUser,
  updateUser,
  createUser,
  deleteUser,
} = require("../controllers/userController");
router.get("/getAllUser", getAllUser);
router.put("/updateUser", updateUser);
router.post("/createUser", createUser);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
