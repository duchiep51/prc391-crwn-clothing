const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    userId: {
        type: String
    },
    totalPrice: {
        type: Number,
        required: true,
    },
},
{ 
    timestamps: true 
});

schema.virtual('details', {
    ref: 'order',
    localField: '_id',
    foreignField: 'orderId'
});

module.exports = mongoose.model('order', schema);