const filmCategory = require('../model/')

exports.getCategory = () => {
  return filmCategory.find().limit(10)
}

exports.addCategory = (category) => {
  return filmCategory({ ...category }).save()
}

exports.deleteCategory = (id) => {
  return filmCategory({ _id: id })
}
