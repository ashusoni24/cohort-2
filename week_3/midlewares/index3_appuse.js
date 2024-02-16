//why do we need input validation
const express = require('express');
const app =express();
const port =3009;
app.use(express.json()); //this is the middle ware without this body cannot be read //extract the body
//we use app.use when we know its is required in all places
app.post("/health",function(req,res){
    const kidney = req.body.kidney;
    const kidneylength = kidney.length;
    res.send("your kidney length is " + kidneylength)
})
app.use( function(err,req,res,next){
//another middleware global catch (at the end) (4 arguments) 
// to not expose our code to the other party 
//error based middle wares,,, in case of exception control reaches here

errorcount++; //to keep track of the exceptions
res.json({
    msgg:"sorry something is up with our server"
})
})
app.listen(port,function(){
    console.log("server is working");
})



