const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
   productId: {
       type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: 'product'
   },
   orderId: {
       type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: 'order'
   },
   quantity: {
       type: Number
   }
},
{ 
    timestamps: true 
});

module.exports = mongoose.model('orderDetail', schema);