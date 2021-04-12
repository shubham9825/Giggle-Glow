const mongoose = require('mongoose')

const LunchSchema=new mongoose.Schema({
    food:{
        type:String,
        required:true,
        trim:true
    },
    suggest:{
        type:String,
        required:true,
        trim:true
    }
},{
    timestamps:true
})

const Lunch=mongoose.model('Lunch',LunchSchema)
module.exports=Lunch