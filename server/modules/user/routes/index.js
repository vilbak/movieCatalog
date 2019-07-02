const express = require('express')
const passport = require('passport')
const {
  postUserRegisterController,
  postUserLoginController,
  getCurrentUserController
} = require('../controllers/')
const router = express.Router()

router.get('/test', (req, res) => res.json({ msg: 'Users Works' }))

router.post('/register', postUserRegisterController)

router.post('/login', postUserLoginController)

router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  getCurrentUserController
)

module.exports = router
