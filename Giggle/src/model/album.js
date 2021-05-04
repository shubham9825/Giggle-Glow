const mongoose =require('mongoose')

const albumSchema=new mongoose.Schema({
    album:{
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

//create a virtual method 
albumSchema.virtual('gallary',{
    ref:'Gallery',
    localField:'_id',
    foreignField:'owner'
})

const album=mongoose.model('album',albumSchema)

module.exports=album
