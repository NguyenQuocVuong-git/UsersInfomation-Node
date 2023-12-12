const router = require("express").Router();

const {
  getAllUser,
  updateUser,
  createUser,
  findByKeyword,
} = require("../controllers/userController");
router.get("/getAllUser", getAllUser);
router.put("/updateUser", updateUser);
router.post("/createUser", createUser);
router.get('/findByKeyword', findByKeyword)
module.exports = router;
