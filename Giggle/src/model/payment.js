const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    date:{
        type:Date,
        trim:true,
        required:true
    },
    entry_time:{
        type:String,
        trim:true,
        required:true
    },
    exit_time:{
        type:String,
        trim:true,
        required:true
    },
    total_time:{
        type:String,
        trim:true,
        required:true
    },
    fees:{
        type:Number,
        trim:true,
        required:true 
    }
},{
    timestamps:true
})

const Payment = mongoose.model('Payment',paymentSchema)

module.exports = Payment