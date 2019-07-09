const mongoose = require('mongoose')

const filmCategoryShema = mongoose.Schema({
  title: {
    type: String,
    min: 3,
    max: 500
  },
  description: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 500
  },
  films: [
    { type: mongoose.Schema.Types.ObjectId,
      ref: 'films',
      required: true }
  ]
}, { collection: 'filmCategories' })

const filmCategory = mongoose.model('FilmCategories', filmCategoryShema)

module.exports = filmCategory