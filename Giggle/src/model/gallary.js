const mongoose = require('mongoose')

const gallarySchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Album'
    }
}, {
    timestamps: true
})

const Gallery = mongoose.model('Gallery', gallarySchema)
module.exports = Gallery