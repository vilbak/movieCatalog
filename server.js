/* eslint-disable standard/object-curly-even-spacing */
/* eslint-disable object-curly-spacing */
const express = require('express')

const bodyParser = require('body-parser')

const app = express()

const logger = require('./server/middleware/logger')
const modules = require('./server/modules/')

app.use(bodyParser.urlencoded({
  extended: false
}))

logger.info('What rolls down stairs')
logger.info('alone or in pairs,')
logger.info('and over your neighbors dog?')
logger.warn('Whats great for a snack,')
logger.info('And fits on your back?')
logger.error('')

app.use(bodyParser.json())

app.use('/', modules)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`
  ------------------------------------
      Server running on port ${port}    
  ------------------------------------
  `)
})
