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