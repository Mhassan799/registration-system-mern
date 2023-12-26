const express = require('express')
const bookController = require('../controller/bookController')
const router = express.Router();
const { verifyToken } = require('../utils/jwt');
const formidable = require('express-formidable')

router.post('/create-book',formidable(),bookController.createBook)
router.get('/get-books',bookController.getBook);
router.get('/get-photo/:bid',bookController.getPhoto)

module.exports= router ;