
const mongoose = require("mongoose");

/**
 * Our User model.
 *
 * This is how we create, edit, delete, and retrieve user accounts via MongoDB.
 */
module.exports.User = mongoose.model("User", new mongoose.Schema({
  username:     { type: String, required: true, unique: true },
  password:     { type: String, required: true },
}));