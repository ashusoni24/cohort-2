// function timeneed(fn,duration){
//     setTimeout(fn,duration);
// }
// timeneed(function(){
//     console.log("hi there");
// },1000)

// function promisified(duration){
//     const p  =  new Promise(function(resolve){
//         setTimeout(function(){
//             console.log("hey people");
//             resolve();
//         },duration);
//     });
//     return p ;
// }
// const ans = promisified(5000);
// ans.then(function(){
//     setTimeout(function(){
//         console.log("timeout is done");
//     },5000);
// });


// const fs = require('fs');  (readfile example)

// const fileName = '/Users/ashutoshsoni/Cohort/week_1/example.txt'; // Specify the file path here

// // Read the entire contents of the file
// fs.readFile(fileName, 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }

//   console.log('File content:', data); // Print the content of the file
// });


