const mongoose = require("mongoose");//I require mongoose
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
    firstname:{type: String, required : true},
    lastname:{type: String, required : true},
    phonenumber:{type: String, required : true, unique : true} ,
    username:{type: String, required : true, unique : true} ,
    email:{type: String, required : true, unique : true},
    password:{type: String, required : true},
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("UserRegister",userSchema); //we can use in other files 
