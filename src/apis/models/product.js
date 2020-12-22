const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'category'
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

schema.methods.toJSON = function () {
  const product = this;
  const productObject = product.toObject();

  productObject.id = product._id;

  return productObject;
}

module.exports = mongoose.model("product", schema);
