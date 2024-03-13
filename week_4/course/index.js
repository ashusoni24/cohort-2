const express = require('express');
const bodyparser = require('body-parser')
const app =express();
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');

app.use(bodyparser.json())
app.use('/admin',adminRouter)
app.use('/user',userRouter)

const port = 3001;
app.listen(port,function(){
    console.log('server is running ')
})


