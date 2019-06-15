const express = require('express');

const router = express.Router();

const {getName} = require('../controllers');
const validation = require('../middleware/validation');



router.get('/hello-world', validation, getName);

module.exports = router;
