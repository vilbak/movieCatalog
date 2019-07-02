const Validator = require('validator')
const isEmpty = require('./isEmpty')

module.exports = function validateMovieInputs (data) {
  let errors = {}

  data.title = !isEmpty(data.title) ? data.title : ''

  if (!Validator.isLength(data.title, { min: 3 })) {
    errors.title = 'Title needs to be 3 or more characters long '
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Film title is required'
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description of film fis required'
  }

  if (!Validator.isLength(data.description, { min: 3 })) {
    errors.duration = 'Description needs to be 3 or more characters long'
  }
  if (!Validator.isURL(data.avatar)) {
    return {
      errors,
      isValid: isEmpty(errors)
    }
  }
}
