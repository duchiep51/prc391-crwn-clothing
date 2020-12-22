const mongoose = require('mongoose');
const { default: validator } = require('validator');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid');
                
            }
        }
    },
    password: {
        type: String,
        minlength: 6,
        trim: true
    },
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

schema.virtual('orders', {
    ref: 'order',
    localField: 'id',
    foreignField: 'userId'
});

const User = mongoose.model('User', schema);

schema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email, password }).exec();

    if (!user) {
        throw new Error('Unable to login!');
    }

    return user;
}

module.exports = mongoose.model('user', schema);