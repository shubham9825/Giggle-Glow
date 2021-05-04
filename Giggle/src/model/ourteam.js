const mongoose = require('mongoose')

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    post: {
        type: String,
        required: true,
        trim: true
    },
    image:{
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

const OurTeam = mongoose.model('OurTeam', TeamSchema)
module.exports = OurTeam