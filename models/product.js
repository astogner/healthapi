const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    _Id: {
        type: Number
    },
    prodName: {
        type: String,
        required: true,
        unique: true
    },
    servingSize: {
        type: Number,
        required: true
    },
    servingsPer: {
        type: Number,
        default: 1
    },
    calories: {
        type: Number,
        required: true
    },
    protein: {
        type: Number,
        default: 0
    },
    carbs: {
        type: Number,
        default: 0
    },
    fat: {
        type: Number,
        default: 0
    },
    tags: {
        type: Array,
        default: []
    },
    createdBy: {
        type: mongoose.SchemaType.ObjectId,
        required: true
    },
    dateCreated: {
        type: Date,
        deault: () => Date.now()
    }
})

productSchema.statics.findByProdName = function (prodName) {
    return this.where({ prodName: new RegExp(prodName, "i") })
}

module.exports = mongoose.model('Product', productSchema)
