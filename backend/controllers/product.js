const productModel = require('../models/products');
const dotenv = require('dotenv');
const { ObjectId } = require('mongodb');

let singleProduct_get = async (req, res) => {
    try {
        res.json({ success: true,  message: 'user found' });
    } catch (error) {
        res.json({ success: false, message: 'Internal Server Error', error: error.message });
    }
};


module.exports = {
    singleProduct_get
}