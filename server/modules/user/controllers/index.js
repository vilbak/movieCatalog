/* eslint-disable handle-callback-err */
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const uri = require('../../../../config/default')
const validateRegisterInput = require('../../../middleware/validationRegister')
const validateLoginInput = require('../../../middleware/validationLogin')
const User = require('../data/model/user')

exports.postUserRegisterController = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body)

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors)
  }

  User.findOne({ email: req.body.email }).then(user => {
    errors.email = 'Email already exists'
    if (user) {
      return res.status(400).json(errors)
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200', // Size
        r: 'pg', // Rating
        d: 'mm' // Default
      })

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password

      })

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err
          newUser.password = hash
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err))
        })
      })
    }
  })
}

exports.postUserLoginController = (req, res, next) => {
  const { errors, isValid } = validateLoginInput(req.body)

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors)
  }

  const email = req.body.email
  const password = req.body.password

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = 'User not found'
      return res.status(404).json(errors)
    }

    console.log({ user })

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched

        const payload = {
          id: user.id,
          name: user.name,
          avatar: user.avatar

        }
        jwt.sign(
          payload,
          uri.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) {
              console.lgo(err)
              return res.json(null)
            }
            res.json({
              success: true,
              token: 'Bearer ' + token
            })
          }
        )
      } else {
        return res.json({ response: 'ERROR ERROR' })
      }
    }).catch(e => console.log(e))
  }).catch(e => console.log({ e }))
}

exports.getCurrentUserController = (req, res, next) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.password
  })
}
