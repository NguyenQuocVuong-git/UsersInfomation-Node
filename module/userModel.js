const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    username: {type: String, unique: true, require: true, default:"Username1"},
    email: {type: String, unique: true, require: true, default:"Username1@gmail.com"},
    password: {type: String, require: true, default:"PassWord123!@"},
    name: {type: String, require: true, default:"Name user"}
});

module.exports = mongoose.model("user", userModel);
