const productModel = require('../models/products')
require('dotenv').config();


const getProductsByCondition = async (params) => {
    try {
        let result;

        if (params.productId) {
            result = await productModel.details.findOne({ _id: params.productId });
            result = result ? [result] : [];
        } else if (params.categoryId) {
            result = await productModel.details.findOne({ categoryId: params.categoryId });
            result = result ? [result] : [];
        } else if (params.allProduct) {
            result = await productModel.details.find({});
            result = result || [];
        }

        result =  result ? result.map(doc => {
            const updatedCoverImage = process.env.BACKEND_URL + (process.env.PRODUCT_IMG_PATH || '') +'/'+ doc.coverImage;
            const updatedImages = doc.images ? doc.images.map(image => ({
                imgURL: process.env.BACKEND_URL + (process.env.PRODUCT_IMG_PATH || '') +'/'+ image.imgURL,
                imgAlt: image.imgAlt
            })) : null;
            return {
                ...doc._doc,
                coverImage: updatedCoverImage,
                images: updatedImages
            };
        }) : [];
        return result;
    } catch (err) {
        console.error('Error in getProductsByCondition:', err.message);
        throw new Error(err.message);
    }
};

let getProducts = async (req, res) => {
    if (req.body) {
        try {
            let success = false;
            let products = [];
            let message = '';

            let options = {};

            if (req.body.allProduct) {
                options.allProduct = req.body.allProduct;
            } else if (req.body.productId) {
                options.productId = req.body.productId;
            } else if (req.body.categoryId) {
                // =======================================================================
                // category work pending for fetching products from all children categorys
                options.categoryId = req.body.categoryId;
                // =======================================================================
            }


            products = await getProductsByCondition(options);
            success = products.length !== 0;
            message = success ? 'products found' : 'products not found';
            res.json({ success: success, message: message, products: products });
        } catch (err) {
            res.json({ success: false, message: 'Internal Server Error', error: err.message });
        }
    } else {
        res.json({ success: false, message: 'No Product Specified' });
    }
};



let addProduct = async (req, res) => {
    if (req.body) {
        try {
            const productDetails = new productModel.details(req.body)
            productDetails.save()
                .then(result => {
                    res.json({ 'success': true, "message": "product added" })
                })
                .catch(err => {
                    res.json({ 'success': false, 'message': "cannot add product", error: err.message })
                });
        } catch (err) {
            res.json({ success: false, message: 'Internal Server Error', error: err.message });
        }
    } else {
        res.json({ success: false, message: 'add product details' });
    }
};



let deleteAllProducts = async (req, res) => {
    try {
        const result = await productModel.details.deleteMany({});
        res.json({ success: true, message: `${result.deletedCount} documents deleted.` });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
};

module.exports = {
    addProduct,
    deleteAllProducts,
    getProducts
}