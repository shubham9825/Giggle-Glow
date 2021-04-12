const mongoose=require('mongoose')

//Registration form schema 
const RegistrationSchema=new mongoose.Schema({
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
    address:{
        type:String,
        required:true,
        trim:true,
        maximum:50
    },
    city:{
        type:String,
        required:true,
        trim:true
    },
    states:{
        type:String,
        required:true,
        trim:true
    },
    zipcode:{
        type:Number,
        required:true,
        trim:true,
        maximum:6
    },
    gender:{
        type:String,
        required:true,
        trim:true
    },
    parentnm:{
        type:String,
        required:true,
        trim:true
    },
    phonenum:{
        type:String,
        required:true,
        trim:true,
        minimum:10,
        maximum:10
    },
    plcwork:{
        type:String,
        required:true,
        trim:true,
        maximum:50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    doctornm:{
        type:String,
        required:true,
        trim:true
    },
    drphonenum:{
        type:String,
        required:true,
        trim:true,
        minimum:10,
        maximum:10
    },
    allergies:{
        type:String,
        required:true,
        trim:true,
        maximum:200
    }
},{
    timestamps:true
})

const Registration=mongoose.model('Registration',RegistrationSchema)
module.exports=Registration
