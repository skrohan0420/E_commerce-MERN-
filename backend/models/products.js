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
    keyFeatures: {
        type: [String],
        validate: {
            validator: function (arr) {
                // Custom validation function to check if all elements are strings
                return Array.isArray(arr) && arr.every(item => typeof item === 'string');
            },
            message: 'keyFeatures array must contain only strings.'
        },
        required: false
    },
    images: {
        type: [
            {
                imgURL: {
                    type: String,
                    required: true
                },
                imgAlt: {
                    type: String,
                    required: true,
                    default: "https://healthcoaching.prebuiltsites.com/wp-content/uploads/2020/06/placeholder-image.jpg"
                }
            },
        ],
        _id: false ,
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
        _id: false ,
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
        _id: false ,
        required: false,
    }
}, { timestamps: true });

const details = mongoose.model('products', ProductDetailsSchema);

module.exports = {
    details,
};