const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    }
}, {
    timestamps:true
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact