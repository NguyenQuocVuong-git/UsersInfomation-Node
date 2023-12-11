const router = require("express").Router();

const {
  getAllUser,
  updateUser,
  createUser,
} = require("../controllers/userController");
router.get("/getAllUser", getAllUser);
router.put("/updateUser", updateUser);
router.post("/createUser", createUser);
module.exports = router;
