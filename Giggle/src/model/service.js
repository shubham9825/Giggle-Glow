const mongoose=require('mongoose')

//service form schema 

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
    tagline:{
        type:String,
        required:true,
        trim:true 
    },
    long_question:{
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
