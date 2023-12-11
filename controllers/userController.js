const UserModel = require("../model/userModel");
const {
  checkName,
  checkEmail,
  checkAge,
  checkPhone,
  isEmpty,
} = require("../auth/auth_valid");
module.exports = {
  getAllUser: async function (req, res, next) {
    const allUser = await UserModel.find();
    if (!allUser) {
      res.status(400).json({ err: "User not found!" });
    } else {
      res.status(200).json({ allUser });
    }
  },
  updateUser: async function (req, res, next) {
    const { name, age, phone, email, key } = req.body || null;
    const chekAll =
      checkName(name) != null ||
      checkEmail(email) != null ||
      checkAge(age) != null ||
      checkPhone(phone) != null ||
      isEmpty(key);
    if (chekAll) {
      res
        .status(400)
        .json({ status: false, err: "Error updating information" });
    } else {
      const findUserNeedUpdate = await UserModel.findOneAndUpdate(
        { email: key },
        {
          name,
          age,
          phone,
          email,
        }
      );
      if (!findUserNeedUpdate) {
        res.status(400).json({
          status: false,
          err: "Could not find the user whose information needs updating",
        });
      } else {
        res.status(200).json({ status: true, mess: "Update successful" });
      }
    }
  },
};
