const express = require ('express');
const app = express();
const zod = require("zod");
const port = 3007;

function validate(obj){
    const schemaa = zod.object({
        email:zod.string().email(),
         password:zod.string().min(8)
    })
    const response = schemaa.safeParse(obj);
   console.log(response);
  }
 
   app.post("/login",function(req,res){
    const response = validate(req.body);
     if(!response.success){
        res.json({
            mssg:"your inputs is wrong"
        })
        return;
     }
   })

app.listen(port)