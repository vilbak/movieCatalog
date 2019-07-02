/* eslint-disable no-multiple-empty-lines */
const winston = require('winston')
module.exports = winston.createLogger({
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: '/access.log',
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: true
    }),
    new winston.transports.Console({
      level: 'info',
      handleExceptions: true,
      json: false,
      colorize: true
    })
  ],
  exitOnError: false
})

