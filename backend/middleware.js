const {jwtSecret} = require("./config")
const jwt = require("jsonwebtoken")

const authMiddleware = (req , res , next) => {

    const authHeader =  req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(403).json({
            message : "You are not Authenticated"
        })
    }

    const token = authHeader.split(" ")[1]

    try{
        const decodedJwt = jwt.verify(token , jwtSecret)
        
        if(decodedJwt.userid){
            req.userid = decodedJwt.userid;
            next();
        }
        else{
            res.status(403).json({})
        }
       
     }
    catch(err){
        return res.status(403).json({})
    }

}

module.exports = {authMiddleware}