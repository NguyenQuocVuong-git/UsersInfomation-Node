const historyChatModel = require("../model/historyChat")
const { validateFields } = require("../utils/index")

module.exports = {
    save: async function (req, res) {
        const { content, sendBy, idUser1, idUser2 } = req.body
        try {
            if (validateFields({ content, sendBy, idUser1, idUser2 })) {
                await historyChatModel.create({
                    content,
                    sendBy,
                    idUser1,
                    idUser2
                })
                res
                    .status(200)
                    .json({ status: true, mess: "Success to send message" });
            } else {
                res.status(400).json({
                    status: false,
                    err: "Failed to send message",
                });
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                status: false,
                err: "Failed to send message",
            });
        }
    },
    getChatHistoryById: async function (req, res) {
        const { idUser1, idUser2 } = req.body
        try {
            const records = await historyChatModel.find({
                $or: [
                  { sendBy: idUser1, idUser2: idUser2 },
                  { sendBy: idUser2, idUser2: idUser1 }
                ]
              });
            res.status(200).json({ records });
        } catch (error) {
            console.log(error)
        }

    }
};