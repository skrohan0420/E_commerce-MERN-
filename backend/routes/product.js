const express = require('express');
const router = express.Router();
const authUser = require('../middleware/authUser')
const productController = require('../controllers/product')


router.post('/',productController.singleProduct_get)



module.exports = router;
