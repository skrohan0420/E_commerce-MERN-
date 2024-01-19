const express = require('express');
const router = express.Router();
const authUser = require('../middleware/authUser')
const productController = require('../controllers/product')


router.post('/add',authUser,productController.addProduct)



module.exports = router;
