const express = require('express')

const router = express.Router()

const filmRoute = require('./films/routes')

const categoryRoute = require('./filmsCategories/routes')

const helloWorldRoute = require('./helloWorld/routes/')

router.use('/hello-world', helloWorldRoute)

router.use('/films', filmRoute)

router.use('/films/categories', categoryRoute)

module.exports = router

const {
  createLogger,
  format,
  transports
} = require('winston')
module.exports = createLogger({
  level: 'info',
  format: format.combine(format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss'
  }), format.errors({
    stack: true
  }), format.splat(), format.json()),
  defaultMeta: {
    service: 'OTL-parser'
  },
  transports: [ new transports.Console({
    handleExceptions: true
  })]
})
