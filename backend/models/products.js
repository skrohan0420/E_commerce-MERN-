const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductDetailsSchema = Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    price: {
        type: {
            basePrice: {
                type: Number,
                required: false,
            },
            offerPrice: {
                type: Number,
                required: false,
            }
        },
        required: false,
    },
    onSale: {
        type: Boolean,
        required: true,
    },
    saleDetails: {
        type: {
            discount: {
                type: Number,
                required: false,
            },
            salePrice: {
                type: Number, 
                required: false,
            }
        },
        required: false,
    }
}, { timestamps: true });

const details = mongoose.model('products', ProductDetailsSchema);

module.exports = {
    details,
};