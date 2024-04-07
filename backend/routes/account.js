const express = require("express");
const { Balance } = require("../db");
const {authMiddleware }= require("../middleware");

const router = express.Router();

router.get("/balance" , authMiddleware, async(req,res) => {
    const account = await Balance.findOne({
        userid : req.userid
    });

    res.json({
        balance : account.balance
    })
})

router.post("/transfer" , authMiddleware, async(req,res) => {
   
   
    const amount = req.body.amount
    const to = req.body.to

    const account = await Balance.findOne({userid : req.userid})

    if (!account || account.balance < amount){
        
        return res.status(400).json({
            message: "Insufficient balance"
        })
    }

    const toAccount = await Balance.findOne({ userid : to})

    if (!toAccount){
        
        return res.status(400).json({
            message: "Invalid account"
        })

    }

    await Balance.updateOne({userid : req.userid} , { $inc : { balance : -amount}})
    await Balance.updateOne({userid: to} , {$inc : {balance : +amount}})

    res.json({
        message: "Transfer successful"
    })

});

module.exports = router;
