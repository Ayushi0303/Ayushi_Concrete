const express = require("express");
const UserRegister = require('../models/userregister'); //import user model
const router = express.Router();
const bcrypt = require("bcrypt");//for password hashing
const jwt = require("jsonwebtoken");

//anything which has /signup will reach this route
//in the above func after we recv /signup we want to create a new user and store  in database 
// so we need a new mongoose model now as we have new type of data now so in model we cretae user.js
router.post("/signup",(req,res) =>{
    console.log("in signup baclup");
     console.log(req.body)
    bcrypt.hash(req.body.password,10)
    .then(hash =>{
        const user = new UserRegister({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            phonenumber:req.body.phonenumber,
            username:req.body.username,
            email:req.body.email,
            password:hash
        });
        user.save()
        .then(result => {
            res.status(201).json({
                message:'User created',
                result: result
            });
        })
        .catch(err => {
            res.status(500).json({
                message: err
            });
        });
    });
    
});

router.post("/login",(req,res) => {
    let fetchedUser;
    console.log(req.body)
    UserRegister.findOne({
        username:req.body.username
    })
    .then(userLogin => {
        if(!userLogin){
           // console.log("log failed");
           return res.status(404).json({
                message: "Auth Failed"
            })
        }
        fetchedUser = userLogin;
        return bcrypt.compare(req.body.password,userLogin.password)
    })
    .then(result=>{
        if(result){
            const token = jwt.sign({email:fetchedUser.email,userId: fetchedUser._id},
                                    "secret_this_should_be_longer",
                                    {expiresIn:"1h"});
            console.log("log in")
            return res.status(200).json({
                token :token,
                message: "Logged in "
            })
        }
        else{
            //console.log("log faillll")
            return res.status(404).json({
                message: "Auth Failed Password Incorect"
            })
        }
    })
    .catch(error => {
        return 
        res.status(500).json({
            message: error
        })
    })

});
    //console.log(req.body)

// router.post("/logout",(req,res)=> {
//     console.log("logout request" + req.body.email);
//     User.findOne({
//         email:req.body.email
//     })
//     .then(user => {
//            return res.status(200).json({
//                 message: "User Logged Out"
//             })
//         })
// });

   
module.exports = router;