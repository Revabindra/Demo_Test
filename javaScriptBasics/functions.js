
function getname1(){
    console.log("js1");          // hoisted 
}

var getname2 =()=>{
    console.log("js concepts");  //not hoisted 
}

var getname3=function(){
    console.log("js2");          //not hoisted
}


var x=1;      
a();           // a will be pushed into the call stack and 10 will be on console 
b();           // b will be there on console 
console.log(x);  // then 1 will print

function a(){
    var x=10;
    console.log(x);
}
function b(){
    var x=100;
    console.log(x);
}

//shortest js program - no code (window)

var a=10;         //global space outside function
function c(){
    var b=10;
}
console.log(a);
//onsole.log(b);    // not defined
//console.log(window.a);
console.log(this.a);  


