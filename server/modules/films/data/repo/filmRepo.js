const films = require('../model/')

exports.getFilms = () => {
  return films.find().limit(10)
}

exports.addFilm = (film) => {
  return films({ ...film }).save()
}

exports.deleteFilm = (id) => {
  return films.deleteOne({ _id: id })
}

exports.findFilm = (id) => {
  return films.findOne({ _id: id })
}
