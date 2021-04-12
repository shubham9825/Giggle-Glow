const mongoose=require('mongoose')

const PsigUpschema=new mongoose.Schema({
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
   email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password:{
        type:String,
        require:true,
        trim:true
    }
},{
    timestamps:true
})

const PsignUp=mongoose.model('PsignUp',PsigUpschema)
module.exports=PsignUp