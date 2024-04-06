const jwt = require("jsonwebtoken")
const jwtSecret = require("./config")


const authMiddleware = (req , res , next) => {

    const authHeader =  req.headers.authHeader

    if (!authHeader || !authHeader.startsWith("Bearer")){
        res.status(403).json({
            message : "You are not Authenticated"
        })
    }

    const token = authHeader.split(" ")[1]

    try{
        const decodedJwt = jwt.decode(token , jwtSecret)
        
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

module.exports = authMiddleware;