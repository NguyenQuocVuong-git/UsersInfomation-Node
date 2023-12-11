const router = require("express").Router();
const { getAllUser } = require("../controllers/userController");
router.get("/getAllUser", getAllUser);

module.exports = router;
