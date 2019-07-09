/* eslint-disable no-path-concat */
/* eslint-disable standard/object-curly-even-spacing */
/* eslint-disable object-curly-spacing */
const express = require('express')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const passport = require('passport')
const passportConfig = require('./config/passport')
// const logger = require('./server/middleware/logger')
app.use(cors())

const modules = require('./server/modules/')

connectDB()
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json())

// const loggerstream = {
//   write: function (message, encoding) {
//     logger.info(message)
//   }
// }
// app.use(require('morgan')('combined', { 'stream': loggerstream }))
// Passport middleware
app.use(passport.initialize())

// Passport Config
passportConfig(passport)

app.use('/', modules)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`
  ------------------------------------
      Server running on port ${port}    
  ------------------------------------
  `)
})
