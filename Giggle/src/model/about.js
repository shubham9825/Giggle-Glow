const mongoose=require('mongoose')

const aboutSchema=new mongoose.Schema({
    about:{
        type:String,
        required:true,
        trim:true
    },
    mission:{
        type:String,
        required:true,
        trim:true
    },
    vision:{
        type:String,
        required:true,
        trim:true   
    }
},{
    timestamps:true
})

const about=mongoose.model('about',aboutSchema)
module.exports=about