const Joi = require('@hapi/joi')

const categoryValidation = require('../validationModule/')

module.exports = function (req, res, next) {
  const error = Joi.validate(req.body, categoryValidation)

  if (error) {
    console.log(error)
    next({
      status: 400
    })
  } else {
    next()
  }
}
