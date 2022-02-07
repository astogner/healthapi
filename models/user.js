const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _Id: {
        type: Number
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailAddr: {
        type: String,
        maxLength: 20,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        deafult: false,
        immutable: true,
        required: true
    },
    dateCreated: {
        type: Date,
        immutable: true,
        deault: () => Date.now(),
        required: true
    },
    age: {
        type: Number,
        min: 16,
        max: 116
    }
})

userSchema.statics.findByEmail = function(emailAddr) {
    return this.where("emailAddr").equals(emailAddr.lowercase)
}

module.exports = mongoose.model('User', userSchema)
