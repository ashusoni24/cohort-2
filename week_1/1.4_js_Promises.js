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

// const promisefour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username : "ashu", pass:"123"})
//         }
//         else{
//             reject("wrong")
//         }
//     },1000)
// })
// promisefour
// .then(function(user){
//    console.log(user);
//    return user.username
// })
// .then(function(username){
//   console.log(username);
// })
// .catch(function(error){
//   console.log(error);
// }).finally(function(){
//    console.log("resolved");
// })

const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "ashu", pass:"123"})
        }
        else{
            reject("wrong")
        }
    },1000)
})
async function consumepromisefive(){
    try{
        const response = await promisefive
    console.log(response);
} catch(error){
    console.log(error);
}
    }
 consumepromisefive()




//harkirat --->
// const fs= require('fs');
// function kiratReadFile(){ 
//   console.log("inside the kiratsreadfile")
//   return new Promise(function(resolve){
//     console.log("inside the promise")
//     fs.readFile("a.txt","utf-8",function(err,data){
//       console.log("before the resolve")
//       resolve(data);
//     });
//   })
// }
// function onDone(data){
//   console.log(data)
// }
// var a =kiratReadFile();
// console.log(a);
// a.then(onDone);


