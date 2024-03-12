const express= require("express")
const app = express()
const port =3000
//handling cors errors -- this allows the request from any frontend to make req on this server and take response
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.get("/sum", function(req,res){
    const a= parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a+b;
    res.send(sum.toString())
});
app.listen(port)
