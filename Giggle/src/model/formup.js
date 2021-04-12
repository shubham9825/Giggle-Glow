const mongoose = require('mongoose')

const formupSchema = new mongoose.Schema({
    response:{
        type:String,
        required:true,
        trim:true
    }
},{
    timestamps:true
})

const FormUp = mongoose.model('FormUp',formupSchema)
module.exports = FormUp