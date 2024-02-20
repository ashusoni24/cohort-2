//to calculate the number of the request hitting to our server
const express = require('express');
const port = 3000;
const app = express();
let numberofrequest = 0;
function calculaterequest(req,res,next){   //this is the middleware we are using 
    numberofrequest++;
    console.log(numberofrequest);
    next();
}
app.get("/cal",calculaterequest,function(req,res){

})
app.listen(port,function(){
    console.log(`server is running at ${port}`)
})

//app.use(express.json()) ---to catch the body part in the post reqests ----this middleware
                                                            //is gonna we use everywhere in every rquest 
                                                            //after this line