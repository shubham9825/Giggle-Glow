const mongoose = require('mongoose')

const feeSchema = new mongoose.Schema({
    totalamt:{
        type:Number,
        trim:true,
        required:true
    },
    paid:{
        type:Number,
        trim:true,
        required:true
    },
    unpaid:{
        type:Number,
        trim:true,
        required:true
    }
},{
    timestamps:true
})

const Fee = mongoose.model('Fee',feeSchema)

module.exports = Fee