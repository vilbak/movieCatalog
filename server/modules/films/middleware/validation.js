const Joi = require('@hapi/joi')
const filmValidationModel = require('../validationModel/')

module.exports = function (req, res, next) {
  const { error } = Joi.validate(req.body, filmValidationModel)

  if (error) {
    console.log(error)
    next({
      status: 400
    })
  } else {
    next()
  }
}
