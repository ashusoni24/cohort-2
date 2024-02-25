const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const jwtpass = "12345";
const mongoose = require("mongoose");

mongoose.connect( "mongodb+srv://ashu:NtX2uLzrNCmz8ZB6@cluster0.y1lim1n.mongodb.net/latest" )
const user = mongoose.model('user',{username : String , password : String , email : String});

app.use(express.json())
app.post('/signin',async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const existinguser = await user.findOne({username : username});   //remember
    if(existinguser){
        return res.status(400).json({
            mssg: "user already exist"
        })
    }
    else{
    const User = new user({username:username,password:password,email:email})
    User.save();
    var token = jwt.sign({username : username},jwtpass);
    return res.json({
        mssg: "new user is created",
        tokens : token,
    })
}
})
 app.get("/user",function(res,req){
      const token = req.headers.authorization;
      const decoded = jwt.verify(token,jwtpass); // we have to save the token to verify


 })

app.listen(3000)
