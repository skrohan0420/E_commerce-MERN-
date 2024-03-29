const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/users')
const authUser = require('../middleware/authUser')

const signUpValidation = [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
]
const logInValidation =  [
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
]
router.post('/create-user',signUpValidation,userController.createUser)
router.post('/log-in', logInValidation, userController.logIn)
router.post('/details',authUser, userController.getUserById)

module.exports = router;