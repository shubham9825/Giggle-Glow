const mongoose=require('mongoose')

const SuggestionSchema=new mongoose.Schema({
    suggest_name:{
        type:String,
        required:true,
        trim:true
    },
    suggest:{
        type:String,
        required:true,
        trim:true
    }
},{
    timestamps:true
})

const Suggestion=mongoose.model('Suggestion',SuggestionSchema)
module.exports=Suggestion