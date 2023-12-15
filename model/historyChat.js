const mongoose = require("mongoose");

const historyChatModel = new mongoose.Schema({
    content: { type: String, require: true },
    sendBy: { type: String, require: true },
    idUser1: { type: String, require: true },
    idUser2: { type: String, require: true },
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model("historyChat", historyChatModel);
