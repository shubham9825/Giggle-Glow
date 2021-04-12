const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    date:{
        type:Date,
        trim:true,
        required:true
    },
    installmetnum:{
        type:Number,
        trim:true,
        required:true
    },
    installmetamt:{
        type:Number,
        trim:true,
        required:true
    }
},{
    timestamps:true
})

const Payment = mongoose.model('Payment',paymentSchema)

module.exports = Payment