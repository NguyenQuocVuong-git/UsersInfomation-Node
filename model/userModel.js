const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

const userModel = new mongoose.Schema({
  email: { type: String, unique: true, require: true },
  age: { type: Number, require: true },
  phone: { type: String, require: true },
  name: { type: String, require: true },
  password:{type: String, require: true}
});

userModel.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});
userModel.methods.checkPass = async function (data) {
  try {
    return await bcrypt.compare(data, this.password);
  } catch (error) {
    next(error);
  }
};

module.exports = mongoose.model("user", userModel);
