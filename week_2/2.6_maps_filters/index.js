//arrows fns
function sum(a,b){
    return a+b;
}
const sum =(a,b)=>{    //another way for the funtions
    return a+b;
}
app.get("/",(req,res)=>{

})
const ans=sum(1,2);
console.log(ans);

//map funciton when ever we need to tranform an array we use map

const input =[1,2,3,4,5];
newAray =[];
for(let i=0;i<input.length;i++){
   newAray.push(input[i]*3);
}
console.log(newAray);

//using maps
function transform(i){
    return i*2;
}
const anss=input.map(transform);
oxnsole.log(anss);

//another way by using maps

const ansss=input.map(function(i){
    return i*2;
})


//filtering
//what if i tell u ,given an input array ,give me back all the even values from it

//using filter

function filterlogic(n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}
const anssss =arr.filter(filterlogic);
console.log(anssss);