const mongoose = require("mongoose");
const { number } = require("zod");


mongoose.connect("mongodb://localhost:27017/paytm");

const userData = new mongoose.Schema({
    username :{
        type : String,
        lowercase : true ,
        required : true,
        unique : true,
        minLength : 3 ,
        maxLength : 30
    } ,
    password : {
        type:String,
        required : true,
        minLength : 3 ,
        maxLength : 20
    },
    firstName : {
        type:String,
        required : true,
        minLength : 3 ,
        maxLength : 30
    } ,
    lastName : {
        type:String,
        required : true,
        minLength : 3 ,
        maxLength : 20
    }
});


const bankSchema = new mongoose.Schema({
    userid : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required : true
    },
    balance :{
        type: Number ,
        required : true
    }
})

const User = mongoose.model("User" , userData )
const Balance = mongoose.model("Balance",bankSchema)

module.exports = {
    User , Balance
}