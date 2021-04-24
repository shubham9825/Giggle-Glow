const mongoose = require('mongoose')

const inqurieSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true
    },
    lname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    phone:{
        type:Number,
        required:true,
        trim:true
        // maximun:10,
        // minimun:10
    },
    message:{
        type:String,
        trim:true,
        required:true
    }
},{
    timestamps:true
})

//create a virtual method 
inqurieSchema.virtual('formups',{
    ref:'FormUp',
    localField:'_id',
    foreignField:'owner'
})


const Inquire = mongoose.model('Inquire',inqurieSchema)

module.exports = Inquire