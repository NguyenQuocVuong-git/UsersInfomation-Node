const router = require("express").Router();
const { getAllUser } = require("../controller/userController");
router.get("/getAllUser", getAllUser);

module.exports = router;
