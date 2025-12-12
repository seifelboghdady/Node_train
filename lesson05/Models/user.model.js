const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = mongoose.Schema({
    firstName :{
        type: String,
        required: true,

    },
    lastName :{
        type: String,
        required: true,
        
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'filed must be a valid Email address']
    },
    password: {
        type: String,
        required : true
    },
    token :{
        type: String
    },
    role :{
        type : String,
        enum: ['USER', 'ADMIN','MANGER'],
        default: 'USER'
    },
    avatar :{
        type : String,
        default: "upload/profile.jpg"
    }
})


module.exports = mongoose.model('User', userSchema);