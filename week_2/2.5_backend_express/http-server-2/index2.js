const express = require('express')
const app = express()
const port = 3002;
app.get('/z',function(req,res){
    const message = req.query.message;
    console.log(message);
    //for send the message from client in the bar only like /z?message=123
    
    res.send("hey you dumb");
})
app.listen(port,function(){
    console.log(`your serve is running ${port}`)
})
