const express = require('express');

const router = express.Router();

const {getName} = require('../controllers');
const validation = require('../middleware/validation');



router.get('/', validation, getName);

module.exports = router;
