//variables 
let a = 2; 
a=3;
console.log(a);   //function to print

//data types
 let firstname = "ashu";
 let age= 18;
 let ismaried = true;
 console.log("this person name is "+ firstname + " and their age is " + age);

 //if else statements
console.log("does harkirat is married");
 if (ismaried == true){
       console.log("no he is not");
 }
 else
  {
    console.log("yeaah he is married")
  }

  //loops
  let answer = 0;
  for(let i=0 ; i<=100 ; i++){
    answer=answer+i;
  }
  console.log(answer);

  //array ---[]
  const personname = ["ashu","hey"];
  console.log(personname[0]);

  const ages = [1,2,3,4,5];
  for(let i =0 ; i <ages.length ; i++ ){
    if(ages[i]%2==0){
      console.log(ages[i]);
    }
  }

  //objects ---{}

  const user1= {
    firstnames : "ashu", gender : "male"
  } 
  user1["firstnames"];
  console.log(  user1["firstnames"]);

  const user2=[{firstname : "ashujj",gender : "male"}, {firstname : "neha" , gender : "female"}];
  for(let i = 0;i<user2.length;i++){
    if(user2[i]["gender"]== "male"){
      console.log(user2[i]["firstname"]);
    }
  }

  //function

function sum (a,b){
    return a+b;
  }
  const value = sum(1,2);
  console.log(value);
  
  // function multiple inputs (call back diff. function)

  function sumof(num1 , num2 , fncallto ){
    let result = num1 +num2;
    fncallto(result);
  
  }
  function displayresult(data){
    console.log("result of the sum is : " + data)
  }
  function displayresultpassive(data){
    console.log("sum result is "+data)
  }

  const result = sumof (1,2,displayresult);

  //another function multiple inputs

  function calculate(a,b,fntocall){
    let ans= fntocall(a,b)
    console.log("your answer is :- " + ans )
  }
  function sumis(a,b){
    return a+b;
  }
  let letvalue=calculate(1,20,sum)
  console.log(letvalue);

  // function call after a time to print 

  function greet(){
    console.log("hey whats up")
  }
  function greetalien(){
    console.log("hey allien whatsup")
  }
  setTimeout(greetalien,1000)
  // also a setInterval function(calls after the function)
 


