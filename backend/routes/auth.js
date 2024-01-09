const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post('/create-user',express.json({ type: '*/*' }),[
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
],
async (req, res) => {
    res.json({"log": req.body.name})
    console.log(validationResult(req))
})

module.exports = router;