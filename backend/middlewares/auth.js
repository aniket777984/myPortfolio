const User =  require("../model/user.js");
const jwt = require("jsonwebtoken");

exports.isAutheticated = async (req,res,next) =>{
    try {
        const {token} = req.cookies;
        if(!token){
            return res.status(400).json({
                success : false,
                message : error.message,
            });
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await User.findById(decoded._id);
        
        req.user = user;
        next();

    } catch (error) {
        return res.status(400).json({
            success : false,
            message : error.message,
        })
    }
}