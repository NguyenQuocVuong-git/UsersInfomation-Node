const router = require("express").Router();

const {
  getAllUser,
  updateUser,
  createUser,
  deleteUser,
  findByKeyword,
} = require("../controllers/userController");
router.get("/getAllUser", getAllUser);
router.put("/updateUser", updateUser);
router.post("/createUser", createUser);
router.delete("/deleteUser/:id", deleteUser);

router.get('/findByKeyword', findByKeyword)
module.exports = router;
