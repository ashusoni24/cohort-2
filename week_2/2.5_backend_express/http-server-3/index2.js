//For taking the input from the user by usng query 
const express= require('express')
const app = express()
const port = 3002
function sum(n){
    let ans = 0;
    for (let i=1 ;i<=n;i++){
        ans=ans+i;
    }
    return ans;
}
app.get('/',function(req,res){
    const n =req.query.n;
    const ans = sum(n);
    res.send("hey our ans is " + ans);
    res.send("hey you ");
})
app.listen(port,function(){
    console.log(`server is running on port  ${port}`)
})