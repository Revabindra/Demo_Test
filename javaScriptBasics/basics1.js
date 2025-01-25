
console.log(x);
var x=7;

const id= 123
let name="reva kaur"
var password="12345"
email="revabindra"

name="archi"       //updated the name
password="1234567" //updated the password
console.table([id,name,password])   // table form 
//var not used due to block scope and functional scope issue 

"use strict"         // treat all js code as new version 
//alert(3+3);        // on browser only

//number 2 to power 53 or bigint
//string ""
//boolean true/false
//null standalone value empty hota
//undefined 
//symbol unique
//object 

console.log(typeof null); // object 
console.log(typeof undefined); //undefined

//"33" = 33
//"33abc" =Nan
// true = 1, false=0 , "" false, 

//operations ----------------------------------------------------------------------------------
let str1="reva"
let str2="kaur"
let str3=str1+ str2
console.log(str3);

console.log("1"+2) //12
console.log(1+"2") //12
console.log("1"+2+3)// 123
console.log(1+2+"3") //33

console.log(null>0)//false
console.log(null>=0)//true
console.log(null==0)//false
//> ,< convert null to 0 

console.log(undefined>0)//false
console.log(undefined>=0)//false
console.log(undefined==0)//false

console.log("2"==2);   //true
console.log("2"===2);  //false

// datatypes how datatypes in memory processed 
//primitive(call by value) string number boolean null(empty) undefined 
//symbol(unique value to make)
// const id=Symbol('abc')
// const anid=Symbol('abc')
// console.log(id===anid)      //FALSE
// bigint
//non primitive (call by reference) array,object, function
// TYPE OF NULL = OBJECT 

//JAVASCRIPT DYNAMIC LANGUAGE - no need to declare the data type of variable explicitly  const score=100, const score=false

console.log(typeof Number);  //fun
console.log(typeof BigInt);//fun
console.log(typeof null);//obj
console.log(typeof undefined); //undf
console.log(typeof boolean);//undef
console.log(typeof String);//fun
console.log(typeof Symbol);//fun
console.log(typeof Object);//fun
console.log(typeof Array);//fun
//heap(non primitive)
//stack (primitive)

let myname="reva"
let my=myname
console.log(my);
//heap main reference value hi dono ko jati hai original value ko hi update karta hai yeh
//stack main uska copy hi milta 




