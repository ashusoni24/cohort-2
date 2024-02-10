//To read file (making remote drive like somthing by giving the name of the file)
const fs = require("fs")
const express = require("express")
const app = express()
const port = 3005

app.get('/files/:fileName',function(req,res){
     const name = req.params.fileName; //this will give you whatevr is present in fileName 
     console.log(name);                //i.e. we write after the /file/ that comes her as a name
     fs.readFile(name,"utf-8",function(err,data){
        res.json({
            data
        });
     })             
                    //this will give you whatevr is present in fileName
})
app.listen(port);
