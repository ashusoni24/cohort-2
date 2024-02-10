// creating a env. where user can come and select the way to cure himself
const express=require('express')
const app = express();
const port=3003;
const users = [{
    name:"john",
    kidneys:[{
        healthy : false
    }]
}];//array of obejects
// now user is created and after selecting one option we need to update the database

//user can how many kidneys they have and there health
app.get("/",function(req,res){
    const johnkidney = users[0].kidneys;
    const numberofkidney=johnkidney.length;
   // can use filter
   let numberofhealthykidney = 0;
   for(let i=0;i<johnkidney.length;i++){
    if(johnkidney[i].healthy){
        numberofhealthykidney=numberofhealthykidney+1;
    }
   }
   const numberofunhealthykideny = numberofkidney-numberofhealthykidney;
   res.json({
    numberofkidney,
    numberofhealthykidney,
    numberofunhealthykideny
   })
})

//user can add new kidney
app.use(express.json())     //we use this for body to be read in the post request
app.post('/',function(req,res){
     const isHealthy = req.body.isHealthy;
     users[0].kidneys.push({
        healthy:isHealthy
     })
     res.json({
        msg:"done"
     })
})
//user can replace a kidney and make it healthy
app.put('/',function(req,res){
    for(let i = 0 ; i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json();
})

//user can remove a kidney
app.delete('/',function(res,req){
    //you should return 411
    //only if atleast one unhealthy kidney is there do this, else return 411
    if(atleastoneunhealthy()){
        const newkidneys=[];
        for(let i = 0 ; i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newkidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newkidneys;
    res.json({mssg:"done"})
    }
    else{
        res.status(411).json({mssg:"no bad kidney"})
    }
})
function atleastoneunhealthy(){
    for(let i = 0 ; i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastoneunhealthy = true;
    }
return atleastoneunhealthy}
}


app.listen(port,function(){
    console.log(`server is running on port ${3003}`)
})