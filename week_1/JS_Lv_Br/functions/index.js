//creating objects
let rectangle={
    length:1,
    breadth:2,
    draw: function(){
        console.log('draw reactangle')
    }
}
//factory function (best ways to create the objects)

function createRec(len,bre){
    let rectangle={
        length:len,
        breadth:bre,
        draw: function(){
            console.log('draw reactangle')
        }
    };
    return rectangle;
}

let recobj1=createRec(10,20);

//constructor fucntion(second way)

function Rec1(len,bre){
    this.lenght=len;  // this - current objects reference
    this.breadth=bre;
    this.draw=function(){
        console.log("draw");
    }
}
//object creation using constructor
  
let rectobj= new Rec1(12,13);
//new keyword - gives empty object back

//now learning adding and deleting in objects
rectobj.color="yellow";
console.log(rectobj) //added
delete rectobj.color;
console.log(rectobj);

//constructor property (function is also a object)
//Types in js - 1. primitive type and 2. Reference type
//1.creates copy
//2.reeference towards the same addres

let a =10;
function inc(a){ //primitive
    a++;
}
inc(a);
console.log(a);

 let b={value:10};
 function incr(b){
    b.value++;
 }
 incr(b);
 console.log(b.value);

 //for in loop
 let square={
    length:1,
    breath:2}
for(let key in square){
    console.log(key,square[key]);
}


 
