exports.getCategory = (req, res) => {
  res.json([])
}

exports.postCategory = (req, res) => {
  res.json(req.body)
}

exports.putCategory = (req, res) => {
  res.json({ id: req.params.id, ...req.body })
}

exports.deleteCategory = (req, res) => {
  res.json({ success: true, id: `parameters: ${req.params.id}` })
}
