const UserModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

const {
  checkName,
  checkEmail,
  checkAge,
  checkPhone,
  checkPassword,
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
  deleteUser: async function (req, res, next) {
    const id = req.params.id;
    if (isEmpty(id)) {
      res.status(400).json({
        status: false,
        err: "The account to be deleted was not found",
      });
    } else {
      try {
        await UserModel.findOneAndDelete({ _id: id });
        res.status(200).json({
          status: true,
          mess: "Account deleted successfully",
        });
      } catch (error) {
        console.log(error)
        res.status(500).json({
          status: false,
          err: "The account to be deleted was not found",
        });
      }
    }
  },
  updateUser: async function (req, res, next) {
    const { name, age, phone, email, key } = req.body || null;
    const chekAll =
      checkName(name) ||
      checkEmail(email) ||
      checkAge(age) ||
      checkPhone(phone) ||
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
    const { name, age, phone, email, password, passwordConfirm } =
      req.body || null;
    const chekAll =
      checkName(name) ||
      checkEmail(email) ||
      checkAge(age) ||
      checkPhone(phone) ||
      checkPassword(password) ||
      checkPassword(passwordConfirm) ||
      passwordConfirm != password;
    if (chekAll) {
      res.status(400).json({
        status: false,
        err: "Wrong information cannot create an account",
      });
    } else {
      try {
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
        const passwordHash = await bcrypt.hash(password, salt);
        await UserModel.create({
          name,
          age,
          phone,
          email,
          password: passwordHash,
        });
        res
          .status(200)
          .json({ status: true, mess: "Account successfully created" });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          status: false,
          err: "An error occurred during account creation",
        });
      }
    }
  },
  findByKeyword: async function (req, res, next) {
    try {
      const query = req.query.key;
      const items = await UserModel.find({
        name: { $regex: query, $options: "i" },
      });
      res.status(200).json({ items });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
