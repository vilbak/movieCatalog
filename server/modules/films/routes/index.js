const express = require('express')
const router = express.Router()

const filmController = require('../controllers')

router
  .route('/')
  .get(filmController.getFilm)
  .post(filmController.postFilm)

router
  .route('/:id')
  .put(filmController.putFilm)
  .delete(filmController.deleteFilm)

module.exports = router
