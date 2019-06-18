const Joi = require('@hapi/joi')

module.exports = Joi.object()
  .options({
    abortEarly: false
  })
  .key({
    id: Joi.number()
      .required(),
    title: Joi.string()
      .min(3)
      .required(),
    description: Joi.string()
      .min(3)
      .max(500)
      .required(),
    films: Joi.array()
      .items(Joi.number().required())
  })
