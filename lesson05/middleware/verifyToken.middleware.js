const jwt = require('jsonwebtoken');
const httpStatus = require('../utils/httpStatus')
const verifyToken = (req, res, next)=>{
    const authHeader= req.headers['Authorization']|| req.headers['authorization'];
    if(!authHeader){
        return res.status(400).json({status : httpStatus.ERROR, message : 'Token is Required'})
    }
    const token = authHeader.split(' ')[1];
    try{
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        //console.log(decodedToken);
        req.decodedToken = decodedToken;
        next();
    }
    catch(err){
        return res.status(400).json({status : httpStatus.ERROR, message : err.message})
    }

}

module.exports= {
    verifyToken
}