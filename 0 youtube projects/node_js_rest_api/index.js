const express = require("express")
const app =express();
const users= require("./MOCK_DATA.json")  //current directory
const port=3000;

app.get("/api/users",function(req,res){
    return res.json(users);
})
app.get("/users",function(req,res){
    const html = `
    <ul>
      ${users.map(function(user){
         return `<li> ${user.first_name}</li>`
      }).join(" ")}
    </ul>
    `;
    res.send(html);
})
app.get("/api/users/:id",function(req,res){
     const id = Number(req.params.id);
     const user =users.find(function(user){
        return user.id==id;
     })
     return res.json(user);
})
//for mutilple req call for same route so

app.route("/api/users/:id")
.get(function(res,req){
    res.json("status pending still")
})
.put(function(req,res){

})
//for pushing the data into the file 
 const fs = require("fs")
app.post("/api/users/:id",function(req,res){
    const body = req.body;
    users.push({...body ,id :users.length +1}); //IMPORTANT (creates the new object and copy elemts from body to it)
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),function (err,data){
        return res.json({
            status:"pending"
        })
    })
}) // post man body request -- x-www-form 



app.listen(port,()=>console.log("server is running"))