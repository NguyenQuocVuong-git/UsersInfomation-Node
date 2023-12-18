const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  email: { type: String, unique: true, require: true },
  age: { type: Number, require: true },
  phone: { type: String, require: true },
  name: { type: String, require: true },
  password: { type: String, require: true },
  token: { type: String },
});

module.exports = mongoose.model("user", userModel);
