const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid')
            }
        }
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = User