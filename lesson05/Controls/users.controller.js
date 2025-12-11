//const {validationResult} = require('express-validator')
const User = require('../Models/user.model');
const httpStatus = require('../utils/httpStatus');
const GenerateJWT = require('../utils/GenerateJWT')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


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
    const {firstName, lastName, email, password, role} = req.body;
    const oldUser = await User.findOne({email: email});
    if(oldUser){
        return res.status(400).json({status : httpStatus.ERROR, message : "User Already exists"})
    }
    //hashing for password
    const hasedPassword= await bcrypt.hash(password, 10);

    const newuser = new User({firstName, lastName, email, password: hasedPassword, role});
    //generate jwt
    const token = await GenerateJWT({email: newuser.email, id: newuser._id})
    newuser.token = token;
    await newuser.save();
    res.status(201).json({status:httpStatus.SUCCESS, data :{user: newuser}});
}

const login =async (req, res)=>{
    const {email, password} = req.body;
    //check for Email and password
    if(!email && !password){
        return res.status(404).json({status : httpStatus.ERROR, message : "User Not Found"})
    }
    const user = await User.findOne({email: email});
    if(!user){
        return res.status(404).json({status : httpStatus.ERROR, message : "User Not Found"})
    }
    matchPassword = await bcrypt.compare(password, user.password);
    if(!user || !matchPassword){
        return res.status(500).json({status : httpStatus.ERROR, message : "SomeThink wrong"});
    }else{
        const token = await GenerateJWT({email: user.email, id: user._id})
        res.status(200).json({status:httpStatus.SUCCESS, data :token});
    }
}

module.exports = {
    getAllUsers,
    register,
    login
}
