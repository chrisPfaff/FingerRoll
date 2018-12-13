const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  name: String,
  team: String
});

module.exports = mongoose.model("User", User);

//may have to change not sure if you can use same name for model
