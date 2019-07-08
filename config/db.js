const mongoose = require('mongoose')

const config = require('config')

const db = config.get('mongoURI')

const connectDB = async () => {
  try {
    await mongoose.connect(db)
    require('../server/modules/user/data/model/user')
    console.log('MongoDB connected')
  } catch (err) {
    console.error(err.message)

    process.exit(1)
  }
}

module.exports = connectDB