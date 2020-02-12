console.log("Hello World");

const NUMBERS = [1,2,6,7];


//NUMBERS.forEach(function(n){
//    console.log(n);
//});


function logger(n){
    console.log(n);
};
NUMBERS.forEach(logger);


var a = 123.45;
a=a*10;
a=a+"Hello";
console.log("37" - 7);
console.log("37" + 7);
console.log(a);


//In Java we can have variables that point to an object.
//A myA = new A();

//In JavaScript we have variables that point to a function.
var f1 = function(){};
function someFunction() {
    return function(){
        //Function to return.
    };
};
function someFunction(){
    function anotherFunction(){};
};

function add(a, b){
    return a+b;
}




















