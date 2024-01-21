const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: { 
        type: String,
        required: true 
    },
    parent: { 
        type: Schema.Types.ObjectId, 
        ref: 'categories',
        required: false
    }
},{ timestamps: true });

const categories = mongoose.model('categories', categorySchema);
module.exports = categories;