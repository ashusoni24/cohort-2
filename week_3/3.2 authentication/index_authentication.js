//concepts:-
//1. hashing :- converting some simple string into some complecated gebrish lang
          //such that the same string has always that gebrish lang
          //and cannot convert back or make asumtions for pass.
//2.encryption :-can convert back using key
//3.json web tokens :-  1.  json - takes json as a input
                    //  2. tokesn - takes input and gives back us a long string
                    //anyone having the output can see your input
                    //adv - saves you a data base call.. we directly get and proceed further
// see pics for task :-
//1. /signin returns a jwt with the username encrypted
//2. /user check for the token if correct returns all the users name

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const app = express();
app.use(express.json())
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  
  let userExists = false;
  for( let i = 0 ; i<ALL_USERS.length ; i++){
         if(username==ALL_USERS[i].username && password == ALL_USERS[i].password){
          userExists =true;
          return userExists;
         }
         else{
          return userExists;
         }
  }
}
  // write logic to return true or false if this user exists
  // in ALL_USERS array


app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    res.json({
      users:ALL_USERS.filter(function(value){
        if(value.username == username){
          return false
        }else{
          return true;
        }
      })
    })
    // return a list of users other than this username
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000,function(){
  console.log(`server is running 3000`)
})