const mongoose = require('mongoose')

const filmShema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 500
  },
  description: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 500
  },
  avatar: {
    type: String,
    required: true

  },
  gallery: {
    type: String,
    required: true

  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  category: {
    type: Number
  }

}, { collection: 'films' }
)
const film = mongoose.model('Film', filmShema)

module.exports = film
