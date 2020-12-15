const mongoose = require('mongoose');
const { default: validator } = require('validator');
const Schema = mongoose.Schema;

const schema = new Schema({
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
        required: true,
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
        // validate(value) {
        //     if (!validator.isMobilePhone(value, 'vi-VN')) {
        //         throw new Error('phone is not valid');
        //     }
        // }
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

const User = mongoose.model('User', schema);

schema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email, password }).exec();

    if (!user) {
        throw new Error('Unable to login!');
    }

    return user;
}

module.exports = mongoose.model('user', schema);