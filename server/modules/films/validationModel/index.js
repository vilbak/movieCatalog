const Joi = require('@hapi/joi');

module.exports =Joi.object()
    .options({abortEarly:false})
    .keys({
        id:Joi.number()
        .required(),
    title:Joi.string()
        .min(3)
        .required(),
    description:Joi.string()
        .min(3)
        .max(500)
    .   required(),
    avatar:Joi.string()
        .uri()
        .required(),
    gallery :Joi.array()
        .min(4)
        .items(Joi.string().uri())
        .required(),
    rating:Joi.number()
        .min(0)
        .max(5),
    category:Joi.number()

});