const express = require('express');
const router = express.Router();

const helloWorldRoute = require('./helloWorld/routes/index');


router.use('/api', helloWorldRoute);


module.exports = router;
