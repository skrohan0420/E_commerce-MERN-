const express = require('express');
const router = express.Router();
const authUser = require('../middleware/authUser')
const productController = require('../controllers/product')


router.post('/',authUser,productController.getProducts)
router.post('/add',authUser,productController.addProduct)
router.delete('/delete-all',productController.deleteAllProducts)



module.exports = router;
