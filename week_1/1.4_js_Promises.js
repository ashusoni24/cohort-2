//promises
// - promises are the syntactical sugar that makes this code more readable
// it is a way to get free from call backs as it is the ugly way to write a code and makes lengthy

//promises - object

// const promiseone = new Promise(function(resolve,reject){
//     setTimeout(function(){
//     console.log("async task is complepted") ;
//     resolve() 
//     },1000)
// })

// promiseone.then(function(){
//     console.log("promise consumed")
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("asyn resolved");
// })

// const promisethree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//     resolve({username:"chai",email : "chai@chaiaurcode.com"})
//     },1000)
// })
// promisethree.then(function(user){
//     console.log(user);
// })


