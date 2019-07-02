exports.getName = function (req, res) {
  console.log('Got a Get request')

  res.json(req.query)
}