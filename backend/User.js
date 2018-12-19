const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  team: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', User)

//may have to change not sure if you can use same name for model
