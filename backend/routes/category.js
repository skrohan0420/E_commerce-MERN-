const express = require('express');
const router = express.Router();
const authUser = require('../middleware/authUser')
const categoryController = require('../controllers/categories')

router.post('/',authUser,categoryController.category)
router.post('/add',authUser,categoryController.addCategory)
router.delete('/delete',authUser,categoryController.deleteAllCategory)

module.exports = router;
