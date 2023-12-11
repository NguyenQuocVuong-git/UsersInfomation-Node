const UserModel = require("../model/userModel");

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
  createUser: async function (req, res, next) {
    const { name, age, phone, email } = req.body || null;
    const chekAll =
      checkName(name) != null ||
      checkEmail(email) != null ||
      checkAge(age) != null ||
      checkPhone(phone) != null;
    if (chekAll) {
      res.status(400).json({
        status: false,
        err: "Wrong information cannot create an account",
      });
    } else {
      const isEmailExist = await UserModel.findOne({ email });
      if (isEmailExist) {
        res.status(400).json({
          status: false,
          err: "This email has been previously registered, please choose another email",
        });
      } else {
        const createUser = await UserModel.create({
          name,
          age,
          phone,
          email,
        });
        if (!createUser)
          res.status(400).json({
            status: false,
            err: "An error occurred during account creation",
          });
        res.status(200).json({ status: true, mess: "Account successfully created" });
      }
    }
  },
};
