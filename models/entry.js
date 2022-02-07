const mongoose = require('mongoose')
const User = require('./models/user')

const entrySchema = new mongoose.Schema({
    _Id: {
        type: Number
    },
    user: {
        type: mongoose.SchemaType.ObjectId,
        required: true
    },
    product: {
        type: mongoose.SchemaType.ObjectId,
        ref: "User",
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    dateCreated: {
        type: Date,
        immutable: true,
        deault: () => Date.now(),
        required: true
    }
})

module.exports = mongoose.model('Entry', entrySchema)
