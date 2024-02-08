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
console.log(combined);
 //slice method
let sliced = combined.slice(2,3);
console.log(sliced)

let person ={
    fname:'ashu',
    lname:'soni'
};
function fullname1(){
    return `${person.fname} ${person.lname}`;
}
console.log(fullname1());//used back ticks

//getters and setter
//1. getter -  access properties
//2.setter -  chnage or mutate property

//why -- 
//above function is only read only so to access

let person1 ={
    fname:'ashu',
    lname:'soni',
    get fullname(){
        return `${this.fname} ${this.lname}`;   
    },
    set fullname(value){
    if (typeof value != String){
        throw new Error("you have not set the string")
    };
      let parts = value.split(' ');
      this.fname=parts[0];
      this.lname=parts[1];
    }
}
console.log(person1.fullname); // Output: ashu soni

//try and catch

try{
    person1.fullname ='ashu';
}
catch(e){
    alert(e)
}


 
