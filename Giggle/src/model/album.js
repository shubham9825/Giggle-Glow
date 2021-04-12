const mongoose =require('mongoose')

const albumSchema=new mongoose.Schema({
    album_name:{
        type:String,
        required:true,
        trim:true
    }
},{
    timestamps:true
})

const album=mongoose.model('album',albumSchema)

module.exports=album