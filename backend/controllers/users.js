const usersModel = requier('../models/users');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const jwtSecret = 'xYiLjHsRcPwNqEoGvKaZmXdFbUiTgHr'