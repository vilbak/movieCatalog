const express = require('express')
const router = express.Router()

const {
  getFilmsController,
  getFilmByIdController,
  deleteFilmByIdController,
  postFilmsController

} = require('../controllers/filmsController')

router
  .route('/')
  .post(postFilmsController)
  .get(getFilmsController)

router
  .route('/:id')
  .get(getFilmByIdController)
  .delete(deleteFilmByIdController)

module.exports = router
