exports.getFilm = (req, res) => {
  res.json([])
}

exports.postFilm = (req, res) => {
  res.json(req.body)
}

exports.putFilm = (req, res) => {
  res.json({
    id: req.params.id,
    ...req.body
  })
}

exports.deleteFilm = (req, res) => {
  res.json({
    success: true,
    id: `parameters: ${req.params.id}`
  })
}
