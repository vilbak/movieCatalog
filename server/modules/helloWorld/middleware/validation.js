module.exports = function (req, res, next) {
  if (!req.query.name) {
    const params = { message: 'name parametrs is required', status: 403 }
    return res.status(params.status).json(params.message)
    

  } else {
    next();
  }
};
