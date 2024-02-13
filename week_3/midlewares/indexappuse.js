//why do we need input validation
const express = require('express');
const app =express();
const port =3009;
app.use(express.json()); //this is the middle ware without this body cannot be read
app.post("/health",function(req,res){
    const kidney = req.body.kidney;
    const kidneylength = kidney.length;
    res.send("your kidney length is " + kidneylength)
})
app.listen(port,function(){
    console.log("server is working");
})