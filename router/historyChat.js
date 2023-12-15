const router = require("express").Router();

const {
    save,
    getChatHistoryById
} = require("../controllers/historyChat");

router.post("/save", save);
router.post("/history",getChatHistoryById )

module.exports = router;


