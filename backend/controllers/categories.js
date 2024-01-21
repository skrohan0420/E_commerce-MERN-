const categoryModel = require('../models/categories')
require('dotenv').config();




const category = (req, res) => {


}

const addCategory = (req, res) => {
    if (req.body) {
        try {
            const categoryDetails = new categoryModel(req.body)
            categoryDetails.save()
                .then(result => {
                    res.json({ 'success': true, "message": "category added" })
                })
                .catch(err => {
                    res.json({ 'success': false, 'message': "cannot add category", error: err.message })
                });
        } catch (err) {
            res.json({ success: false, message: 'Internal Server Error', error: err.message });
        }
        console.log(req)
    } else {
        res.json({ success: false, message: 'add category details2' });
    }
}

let deleteAllCategory = async (req, res) => {
    try {
        const result = await categoryModel.deleteMany({});
        res.json({ success: true, message: `${result.deletedCount} documents deleted.` });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
};


module.exports = {
    category,
    addCategory,
    deleteAllCategory
}