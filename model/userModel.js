const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  email: { type: String, unique: true, require: true },
  age: { type: Number, require: true },
  phone: { type: String, require: true },
  name: { type: String, require: true },
});

module.exports = mongoose.model("user", userModel);
