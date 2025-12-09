//const {validationResult} = require('express-validator')
const User = require('../Models/user.model');
const httpStatus = require('../utils/httpStatus');
const bcrypt = require("bcryptjs");


const getAllUsers = async(req, res)=>{
        const query = req.query;
        const limit = query.limit || 10;
        const page = query.page || 1;
        const skip = (page-1)*limit;
    
        try{
            const users = await User.find({},{"__v" : 0}).limit(limit).skip(skip);
            res.json({status: httpStatus.SUCCESS,
                data:{users}
            });
        }catch(err){
            res.json({status : httpStatus.ERROR, message : err.message});
        }
}


const register= async(req, res)=>{
        const {firstName, lastName, email, password} = req.body;
        const oldUser = await User.findOne({email: email});
        if(oldUser){
            return res.status(400).json({status : httpStatus.ERROR, message : "User Already exists"})
        }
        //hashing for password
        const hasedPassword= await bcrypt.hash(password, 10);

        const newuser = new User({firstName, lastName, email, password: hasedPassword});
        await newuser.save();
        res.status(201).json({status:httpStatus.SUCCESS, data :{user: newuser}});
}

const login =()=>{

}
module.exports = {
    getAllUsers,
    register,
    login
}
