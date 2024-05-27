const express = require("express") 
const router = express.Router();
const zod = require("zod");
const {User , Balance} = require("../db");
const jwt = require("jsonwebtoken")
const {jwtSecret} = require("../config")
const {authMiddleware} = require("../middleware")


const data = zod.object(
    {
        username : zod.string().email(),
        firstName : zod.string(),
        lastName : zod.string(),
        password : zod.string()
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
        username: req.body.username
    })

    if (existingUser) {
        return res.status(411).json({
            message : "User Already Exists , You can Sign in"
        })
    }

   
    const user = await User.create({
        username : req.body.username,
        password : req.body.password,
        firstName : req.body.firstName,
        lastName : req.body.lastName
     })

     const userid = user._id

    await Balance.create({
        userid,
        balance : 1 + Math.random() * 10000
    })

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

    if(!parsedUsername.success && !parsedPassword.success){
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

        const token = jwt.sign(userid , jwtSecret)
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
    firstName : zod.string().optional(),
    lastName : zod.string().optional()

})

router.put("/",authMiddleware,async (req,res) => {
    const parsedUpdate = updateBody.safeParse(req.body)

    if (!parsedUpdate.success){
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne( req.body , {_id : req.userid})
    res.status(200).json({
        message: "Updated successfully"
    })
})

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = router;

