const mongoose = require('mongoose')

const formupSchema = new mongoose.Schema({
    response: {
        type: String,
        required: true,
        trim: true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Inquire'
    }
}, {
    timestamps: true
})

const FormUp = mongoose.model('FormUp', formupSchema)
module.exports = FormUp