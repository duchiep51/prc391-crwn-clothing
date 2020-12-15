const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    }
});

schema.virtual('products', {
    ref: 'product',
    localField: '_id',
    foreignField: 'categoryId'
});

module.exports = mongoose.model('category', schema);