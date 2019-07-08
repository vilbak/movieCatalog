const express = require('express')
const router = express.Router()
const passport = require('passport')

const {
  getFilmsController,
  getFilmByIdController,
  deleteFilmByIdController,
  postFilmsController

} = require('../controllers/filmsController')

router.get('/', passport.authenticate('jwt', { session: false }), getFilmsController)
router.post('/', passport.authenticate('jwt', { session: false }), postFilmsController)
router
  .route('/:id')
  .get(getFilmByIdController)
  .delete(deleteFilmByIdController)

module.exports = router
