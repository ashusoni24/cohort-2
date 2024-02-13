//now using middle wares 
//introducing the another route for the prechecks
//this becomes simpler using the middlewares
const express = require('express');
const app =express();
const port =3008;

function usermiddleware(req,res,next){        // using next as a function for moving to next function call
     const username = req.headers.username;
     const password = req.headers.password;
     if(username!="ashu" && password != "pass"){
        res.status(400).json({
            mssg:"something is up with your input"
        })
    }else{
        next();
    }
}
function kidneymiddleware(req,res,next){
    const kidneyId=req.query.kidneyId;
    if(kidneyId!=1 && kidneyId!=2){
        res.status(400).json({
           mssg:"something is up with your input"
       })
   } else{
    next();
   }
}

app.get("/healthcheck",usermiddleware,kidneymiddleware,function(req,res){ 
 //some logic works          // here we the middle wares and it work line wise first the 1st one then the control
                             //is second to the other function
 res.json({
    mssg:"your heart is healthy"
 });
})
app.get("/kidneycheck",usermiddleware,function(req,res){
    res.json({
        mssg: "your heart is healthy"
    })
})
app.listen(port,function(){
    console.log("server is working");
})