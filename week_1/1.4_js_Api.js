// Async and Sync functions
//synchronous - one after the other
//asynchornous - things happening parallel or context switching
// in asynchoronus we actually need call back functions

//asynchornous function 
//1. setTimeout()

function findsum(n){
    let ans= 0 ;
    for (let i=0;i<n;i++){
        ans+=i;
    }
    return ans;
}
function findsumtill(){
    console.log(findsum(12));
}
setTimeout(findsumtill,10000); // asysuncrhnous
console.log("this statement is before the upper bcus of the timeout function")

// console.log("hi there")
// setTimeout(function ashi(){
//     console.log("inside asyanc");
// },20000);
// setTimeout(function neha(){
//     console.log("inside asyanc");
// },15000);
//  let a = 0;
//  for (let i=0;i<10;i++){
//      a=a+1;
//  }
//  console.log(a);