const express = require('express')
const router = express.Router();

const filmController = require('../controllers');

router
    .route('/')
    .get(filmController.getCategory)
    .post(filmController.postCategory);

router
    .route('/:id')
    .put(filmController.putCategory)
    .delete(filmController.deleteCategory);

module.exports = router;