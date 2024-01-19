const productModel = require('../models/products')
const categoriesModel = require('../models/categories')
const dotenv = require('dotenv');
const { ObjectId } = require('mongodb');



let addProduct = async (req, res) => {
    if (req.body) {
        try {
            const productDetails = new productModel.details(req.body)
            productDetails.save()
                .then(result => {
                    res.json({ 'success': true, "message": "product added"})
                })
                .catch(err => {
                    res.json({ 'success': false, 'message': "cannot add product" ,error: err.message  })
                });
        } catch (error) {
            res.json({ success: false, message: 'Internal Server Error', error: error.message });
        }
    } else {
        res.json({ success: false, message: 'add product details' });
    }
};


module.exports = {
    addProduct
}