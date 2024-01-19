const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductDetailsSchema = Schema({
    name: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    category_id: {
        type: Schema.Types.ObjectId, 
        ref: 'categories'
    },
    keyFeatures:{
        type: Array,
        required: false
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
        default: false
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