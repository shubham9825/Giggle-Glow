const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    t_date:{
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
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Registration'
    }
},{
    timestamps:true
})

const Payment = mongoose.model('Payment',paymentSchema)

module.exports = Payment