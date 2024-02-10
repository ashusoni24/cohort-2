const express = require('express')
const bodyparser = require("body-parser")
const app = express()
const port = 3001
//const port = process.env.PORT || 3000; environment variable---provider may dynamically assign a port

// this is our server so we see req send by client using REQ 
// and we can send the reply to request using the res i.e. resolve
//postman is our client side and browers or develpoer some how send req internally
app.use(bodyparser.json()); //for working of the body
app.post('/y', (req, res) => {
    //console.log(req.body); -- this give me undefined(even after sending the body) 
    const message = req.body.message;
    console.log(message);
    console.log(req.headers) //thats how we can acess the input that user gives us
    res.send("hellow world ashu")
  })
//express ingores the body sent by client
//so we have to use library - body prser
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//how to set up
//1. npm install express
//2. use - npx nodemon index.js - no referesh required

//by using backend we expose some points through which other poeple can hit 
// and we expose one such point like /

                                                 
                                                  