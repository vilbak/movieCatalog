const express = require('express')

const router = express.Router()

const filmRoute = require('./films/routes')

const categoryRoute = require('./filmsCategories/routes')

const helloWorldRoute = require('./helloWorld/routes/')

const userRoute = require('./user/routes/')

router.use('/hello-world', helloWorldRoute)

router.use('/user', userRoute)

router.use('/films', filmRoute)

router.use('/films/categories', categoryRoute)

module.exports = router
