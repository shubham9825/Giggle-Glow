const mongoose=require('mongoose')

const serviceSchema=new mongoose.Schema({
    service_name:{
        type:String,
        required:true,
        trim:true
    },
    short_discription:{
        type:String,
        required:true,
        trim:true
    },
    image:{
        type:String,
        required:true,
        trim:true
    }
},{
    timestamps:true
})

const service=mongoose.model('service',serviceSchema)
module.exports=service
