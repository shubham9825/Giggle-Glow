const mongoose =require('mongoose')

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true
    },
    age:{
        type:Number,
        required:true,
        default:0,
        validate(value){
            if(value<0){
                throw new Error('age must be positive')
            }  
        }   
    }
},{
    timestamps:true
})

//create a virtual method 
userSchema.virtual('tasks',{
    ref:'Task',
    localField:'_id',
    foreignField:'owner'
})

const User=mongoose.model('user',userSchema)
module.exports=User 