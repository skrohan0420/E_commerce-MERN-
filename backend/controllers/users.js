const usersModel = require('../models/users');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const jwtSecret = 'xYiLjHsRcPwNqEoGvKaZmXdFbUiTgHr'

const isUserByEmail = async (email) => {
    try {
        const result = await usersModel.details.findOne({ email });
        return result ? true : false;
    } catch (err) {
        return err;
    }
};

const createUser = async (req, res) => {
    const result = validationResult(req)
    if (result.isEmpty()) {

        const isUser = await isUserByEmail(req.body.email);
        if (isUser) {
            res.json({ 'success': false, 'message': "email allready exists" })
        } else {
            const salt = bcrypt.genSaltSync(10);
            let setPassword = await bcrypt.hash(req.body.password, salt)

            const UsersDetails = new usersModel.details({
                name: req.body.name,
                email: req.body.email,
                password: setPassword,
            });
            UsersDetails.save()
                .then(result => {
                    res.json({ 'success': true })
                })
                .catch(err => {
                    res.json({ 'success': false })
                });
        }
    } else {
        res.json(result.array());
    }
}

const logIn = async (req, res) => {
    let email = req.body.email;
    usersModel.details.findOne({ email })
    .then(async (result) => {
        if (result && await bcrypt.compare(req.body.password, result.password)) {
            const data = {
                user: {
                    id: result.id
                }
            }
            const authToken = jwt.sign(data, jwtSecret)
            res.json({ success: true, message: 'user found', authToken: authToken });
        } else {
            res.json({ success: false, message: 'user not found' });
        }
    })
    .catch(err => {
        res.status(500).json({ success: false, message: 'Internal Server Error',err: err });
    });
}

const getUserById = async (req, res) => {
    let id = req.body.id

}

module.exports = {
    createUser,
    logIn
}