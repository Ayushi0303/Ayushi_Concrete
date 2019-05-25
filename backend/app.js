const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
const app = express();
app.use(bodyParser.json())  

mongoose.connect("mongodb://127.0.0.1:27017/UsersName")
.then(() => {
    console.log("Connected to the database");
})
.catch(() => {
    console.log("Connection failed");
});

app.use((req,res,next )=> {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods","GET","POST","PATCH","DELETE","OPTIONS");


    next();
});
app.use("/api/user",userRoutes);//forwarding now to userroutes in routes ->user.js
// app.get('/',(req,res) => {
//     res.json({
//         message:"Ayushi"
//     });
// });
module.exports = app;