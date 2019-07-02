const mongoose = require('mongoose')

const userShema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now

  }
}, { collection: 'users' })

const User = mongoose.model('user', userShema)

module.exports = User
