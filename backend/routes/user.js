const express = require("express") 
const router = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken")
const jwtSecret = require("../config")
const User = require("../db")
const authMiddleware = require("../middleware")

const data = zod.object(
    {
        username : zod.string().email(),
        firstname : zod.string().min(3),
        lastName : zod.string().min(3),
        password : zod.string().min(3)
    }
)

router.post("/signup" , async (req , res) => {
    const parsedData = data.safeParse(req.body);

    if (!parsedData.success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username : req.body.username
    })

    if (existingUser) {
        return res.status(411).json({
            message : "User Already Exists , You can Sign in"
        })
    }

    const user = await User.create({
        username : req.body.username,
        password : req.body.password,
        firstname : req.body.firstname,
        lastName : req.body.lastName
     })

     const userid = user._id

     const token = jwt.sign({
        userid
     } , jwtSecret)

     res.status(200).json({
        message: "User created successfully",
        token: token
     })
})

router.post("/signin" , async (req , res) => {
    const parsedUsername = data.safeParse(req.username)
    const parsedPassword = data.safeParse(req.password)

    if(!parsedUsername && !parsedPassword){
        res.status(411).json({
	    message: "Error while logging in"
        })
    }

    const user = await User.findOne({
        username : req.body.username,
        password : req.body.password
    })

    const userid = user._id;

    if (user) {

        const token = jwt.sign(userid, jwtSecret)
        res.status(200).json({
            token : token
        })
    }

    res.json(411).json({
        message: "Error while logging in"
    })
})

const updateBody = zod.object({
    password : zod.string().optional(),
    firstname : zod.string().optional(),
    lastName : zod.string().optional()

})

router.put("/",authMiddleware,async (req,res) => {
    const parsedUpdate = updateBody.safeParse(req.body)

    if (!parsedUpdate.success){
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne( {_id : req.userid}, updateBody)
    res.status(200).json({
        message: "Updated successfully"
    })
})

router.get("/bulk" , async (req,res) => {
    const params = req.query.params || " "

    const usersData = await User.find({
        $or : [{
        
                firstname : {
                    "$regex" : params
                },
        },  {
                lastName : {
                    "$regex" : params
                }
        }]
    })
    res.json({
        user : usersData.map( user => ({
            username : user.username,
            firstname : user.firstname,
            lastName : user.lastName
        }))
    })
})

module.exports = router;
