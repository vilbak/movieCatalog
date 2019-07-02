
const Film = require('../data/model/film')

const validationMovie = require('../../../middleware/validationMovie')

exports.postFilmsController = (req, res) => {
  const { errors, isValid } = validationMovie(req.body)
  if (!isValid) {
    return res.status(400).json('Wrong model of film')
  } else {
    new Film(req.body).save().then(film => {
      res.json(film)
    }).catch((errors) => {
      console.error(errors)
    })
  }
}

exports.getFilmsController = (req, res) => {
  Film.find().limit(10)
    .then(filmsArr => res.json(filmsArr))
    .catch(err => res.json(err))
}

exports.getFilmByIdController = (req, res, next) => {
  const errors = {}

  Film.findOne({ _id: req.params.id })
    .then(film => {
      if (!film) {
        errors.film = 'Film does not exist'
        return res.status(404).json(errors)
      }
      res.json(film)
    })
    .catch(err => res.status(404).json(err))
}

exports.deleteFilmByIdController = (req, res) => {
  // Check Permission

  Film.findById({ _id: req.params.id })
    .then(film => {
      if (!film) return res.json('Film not found or already removed')
      Film.findByIdAndRemove({ _id: req.params.id })
        .then(film => res.json(film))
        .catch(err => res.json(err))
    })
    .catch(err => res.json(err))
}
