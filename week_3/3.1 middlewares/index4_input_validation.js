// how can be do better input validation? by using input validation libraries
//most popular is zod library for input validation rather then the manual validationc
const express = require ('express');
const app = express();
const zod = require("zod");
const port = 3007;

//const schema =zod.array(zod.number())

//    { email : string --email
//      pssword : atleast 8 digit
//      country : "IN" or "US"         
//       }

const schemaa = zod.object({
    email:zod.string(), //zod.string().email()
    password:zod.string(), //zod.string().min(8)
    country: z.literal("IN").or(z.literal("US")),
    kidney:zod.array(zod.number())

})

app.use(express.json()); 
app.post("/health",function(req,res){
    const kidney = req.body.kidney;

    const response=schema.safeParse(kidney)    //validating input from the schemma we defined above
                                               //this is the req cam from client
    if (!response.success){
        res.status(441).json({
            mssg:"missging input"
        })
    }
    else{
        res.json(
            response
        )
    }
    
});
app.listen(port)

// //
// const zod = require("zod");
// function validate(obj){
//   const schemaa = zod.object({
//       email:zod.string().email(),
//        password:zod.string().min(8)
//   })
//   const response = schemaa.safeParse(obj);
//  console.log(response);
// }
// validate({
//   email:"asdgasdasjdjs",
//   password:"1224134343"
// })
