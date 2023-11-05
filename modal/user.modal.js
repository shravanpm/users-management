const mongoose = require("mongoose");

const userModal = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, required: true, enum: ["user", "admin"] },
});

const User = mongoose.model("user", userModal);
module.exports = User;
