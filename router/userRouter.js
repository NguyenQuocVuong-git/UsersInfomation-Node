const router = require("express").Router();
const { getAllUser, updateUser } = require("../controllers/userController");
router.get("/getAllUser", getAllUser);
router.put("/updateUser", updateUser);
module.exports = router;
