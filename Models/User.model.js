const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
});

const userModel = new mongoose.model("bug", userSchema);

module.exports = {
  userModel,
};
