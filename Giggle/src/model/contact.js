const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
        trim: true,
        // min:10,
        // max:100
    },
    phone: {
        type: Number
        // validate(value) {
        //     if (value!=(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
        //             throw new Error('Number is not valid.')
        //         }
        //     }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
        // validate(value){
        //     if(value!=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/){
        //         throw new Error('email is not valid.')
        //     }
        // }
    }
}, {
    timestamps:true
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact