const mongoose = require('mongoose')

const gallarySchema = new mongoose.Schema({
    fileName:{
        type:String,
        required:true,
        trim:true
    }    
},{
    timestamps:true
})

const Gallery = mongoose.model('Gallery',gallarySchema)
module.exports = Gallery