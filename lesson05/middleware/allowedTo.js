const httpStatus= require('../utils/httpStatus');
module.exports = (...roles) =>{
    // console.log("roles", roles);
    return (req, res, next)=>{
        if(!roles.includes(req.decodedToken.role)){
            return next(res.status(401).json({status : httpStatus.ERROR, message : "User Not Allowed"}))
        }
        next();
    }
}