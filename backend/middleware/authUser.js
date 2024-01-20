const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config()

const authUser = (req, res, next) => {
    // get the user from the jwt token and id to req objectPosition: 
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(400).json({ 'message': "Access denied" })
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET)
        req.user = data.user
        next()
    } catch (error) {
        res.status(400).json( { 'message': "Access denied" })

    }


}

module.exports = authUser