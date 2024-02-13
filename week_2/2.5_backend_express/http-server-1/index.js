const express = require('express')
const port = 3000
const app = express();

//fs.readFilw("path", urtf-8,())
app.get('/', function(req , res) {
  res.send('Hello World! hows you')
})
app.get('/name', function(req , res) {
  res.send('Hello World! whats up')
})
app.get('/whatsup', function(req , res) {
  res.send('Hello World! whats up need help')
})

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})

// threre are many famous engoines written in c++ or rust and compile js
//someone pull out the v8 engine and added some thing on top to create node js
// so node js is a run time which is use to execute the java script code on backend
// its is use to create a http server
//express your logic to the world
// it let people to request for and use your logic
// frame works for it 1.express 1.next js