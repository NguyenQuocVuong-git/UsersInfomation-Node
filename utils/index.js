
const historyChatModel = require("../model/historyChat")

function validateFields(fields) {
  for (const field in fields) {
    if (fields.hasOwnProperty(field)) {
      if (fields[field] === null || fields[field] === undefined) {
        return false;
      }
    }
  }
  return true;
}

async function saveMessage({ content, sendBy, idUser1, idUser2 }) {
 await historyChatModel.create({
    content,
    sendBy,
    idUser1,
    idUser2
  })
}

module.exports = {
  validateFields,
  saveMessage
};
