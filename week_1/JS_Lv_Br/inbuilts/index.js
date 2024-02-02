//inbuilts objects and arrays in Js
//1. math.random - random number 
//2.math.max(1,2,3,5)

//string
 let lastname= new String("ashu");
 console.log(lastname);
 console.log(typeof(lastname));

 //Date create

 let date=new Date();
 console.log(date);
 
 let date2=new Date('june 20 1998');
 console.log(date2);

 let date3=new Date( );
 console.log(date3);

 //arrays
 let numbers=[1,2,3,4,5];
 console.log(numbers);
 // end - push
 //beg - unshift
 //middle - slice 

 //searching
 console.log(numbers.indexOf(4));
 // searching in case of objects or references
 //1. we use call back functions
// objects - search - find() - arrayname.find(function())

let courses = [
    {no:1, naam:'love'},{no:2, naam :'rahul'}
];
console.log(courses);

let courses1 = courses.find(function(courses){
    return courses.naam == 'love';
});
console.log(courses1);
  
//for combining two arrays
let first = [1,2,3];
let second = [4,5,6];
let combined = first.concat(second);
console.log(combineď);
