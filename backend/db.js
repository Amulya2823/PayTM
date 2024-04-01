const mongoose = require("mongoose")
const {Schema} = "mongoose";

mongoose.connect("mongodb://localhost:27017/paytm");

const userData = new Schema({
    username :{
        type : String,
        lowercase : true ,
        required : true,
        unique : true,
        minLength : 3 ,
        maxLength : 10
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
        minLength : 6 ,
        maxLength : 20
    }
});

const User = mongoose.model(User , userData )

module.exports = {
    User
}