
const Film = require('../repository/model/film')

const validationMovie = require('../../../middleware/validationMovie')

const postForAdmin = require('../../user/controllers/admin/postForAdmin')

exports.postFilmsController = (req, res) => {
  postForAdmin(req, res, {
    Model: Film,
    validateFunc: validationMovie
  })
}

exports.getFilmsController = (req, res) => {
  console.log(req)
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
  if (!req.user.isAdmin) return res.status(401).json('Insufficient rights')
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
