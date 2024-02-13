//middlewares - to do prechecks before the actual logic kicks in
//there are two thimgs a actuall website check
//1. check for the authentication
//2. checks for the input validation -  we are giving write inputs to out logic ot route

//dumb way to do input validation
//while using function also big code so we need middle wares
const express = require ('express');
const app = express();
const port = 3007;
app.get("/healthcheckup",function(req,res){
    const username = req.headers.username;
    const password=req.headers.password;
    const kidneyId=req.query.kidneyId;
    if(username!="ashu" && password != "pass"){
        res.status(400).json({
            mssg:"something is up with your input"
        })
        return
    }
        if(kidneyId!=1 && kidneyId!=2){
             res.status(400).json({
                mssg:"something is up with your input"
            })
            return
        }
    //do something with the kideney here
    res.json({
        mssg:"your kidney is fine!"
    })
})
app.listen(3007,function(){
    console.log("server is running");
})