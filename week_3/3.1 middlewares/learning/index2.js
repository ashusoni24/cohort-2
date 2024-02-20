const express= require('express')
const port = 3000
const app = express()
function caltime(req,res,next){
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`Request ${req.method} ${req.url} took ${duration}ms`);
    });
    next();
}
app.use(caltime);
app.get("/time",function(req,res){
   
   res.json({
    hey:"nice"
   })
})
app.listen(port);
