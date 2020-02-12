//1) Create a new JavaScript file and add these three functions
//Function Declaration
function add(n1, n2) {
    return n1 + n2;
}

//Function Expression
var sub = function (n1, n2) {
    return n1 - n2
}

//Callback example
var cb = function (n1, n2, callback) {
    if (
        typeof n1 === "number" //Will fail if n1 is undefined, or is not a number
        &&
        typeof callback === "function" //Will fail if callback is undefined or is not a function
    ) {
        return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
    }
    throw new SyntaxError("Wrong callback");
};


//2) Call the functions above as sketched below. It’s not about doing it as fast as you can, but about understanding what's happening, so make sure you understand each line.
console.log("\n2)");
console.log(add(1, 2))
//-Q What will this print?
//-A 3

console.log(add)
//-Q What will it print and what does add represent?
//-A It will print [Function: add] It will print the entire function.

console.log(add(1, 2, 3));
//-Q What will it print
//-A 3 - Because 1+2 equals to 3. The add function ignores the third parameter.

console.log(add(1));
//-Q What will it print     
//-A NaN - Because the add function needs 2 definded variables. When we only get one we have a Undefined value. And a undefined value + a number is Not A Number.

console.log(cb(3, 3, add));
//-Q What will it print
//-A "Result from the two numbers: 3+6=6".

console.log(cb(4, 3, sub));
//-Q What will it print
//-A "Result from the two numbers: 4+3=1".

try {
    console.log(cb(3, 3, add()));
} catch (e) {
    console.error(e.name + " : " + e.message);
}
//-Q What will it print (and what was the problem)
/*
-A It wont print anything because it throws an error. The error happens because we technically are making a call that looks like the following.
cb(3,3,NaN).
And since we don't have a function called NaN(Not A Number), it breaks.
*/

console.log(cb(3, "hh", add));
//-Q What will it print
//-A "Result from the two numbers: 3+hh=3hh"


//3)  Error Handling
console.log("\n3)\nlook at coments");
/*
Edited CB with the following code. Minus the return statement.
    if(
        typeof n1 === "number" //Will fail if n1 is undefined, or is not a number
        &&
        typeof callback === "function" //Will fail if callback is undefined or is not a function
    ){
        return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2); <-This line was allready there
    }
  throw new Error("Wrong callback");
*/


//4)  Write a mul(n1, n2) function (inspired by add and sub) and use it as the callback for the cb function
function mul(n1, n2) {
    return n1 * n2;
}
console.log("\n4)\nThe plus sign should be a multiplication sign.");
console.log(cb(3, 3, mul));


//5) Call cb, this time with an anonymous function that divides the first argument with the second
console.log("\n5)\nThe plus sign should be a division sign.");
console.log(cb(3, 3, function(n1, n2){
    return n1/n2;
}));



console.log("\n\n\n\n\n");


/*
1) Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.). Use the filter method to create a new array with only names of length <=3.
Use the forEach method to iterate and print (console.log) both the original and the new array.
*/
console.log("\n1)");
let array = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
let modArray = array.filter(function(a){
    if(a.length <= 3){
        return a;
    }
});

console.log("Original array");
array.forEach(function(value, i){
    console.log(i + ": " + value);
});

console.log("\nArray with only name length 3 or less");
modArray.forEach(function(value, i){
    console.log(i + ": " + value);
});


//2) Use the names-array created above, and, using its map method, create a new array with all names uppercased.
console.log("\n2)");
let arrayMap = array.map(function (a) {
    return a.toUpperCase();
});
console.log(arrayMap);


/*
3) Use map, join + just a little bit more to create a function, which given the array of names, for example: ["Lars", "Peter", "Jan", "Ian"] returns a string with the HTML for the names in an <ul> as sketched below:
<ul>
  <li>Lars</li>
  <li>Peter</li>
  <li>Jan</li>
  <li>Ian</li>
<ul>
The output above was shown with newlines for readability, but this is actually what we want (why):

<ul><li>Lars</li><li>Peter</li><li>Jan</li><li>Ian</li><ul>
*/
console.log("\n3)");
function htmlTranslate(map){
    map = "<ul><li>" + map.join("</li><li>") + "</li><ul>";
    return map;
};
console.log(htmlTranslate(arrayMap));


//4)  Given this JavaScript array
console.log("\n4)");
let cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];
/*a) Use the filter filter function to get arrays with only:
Cars newer than 1999
Al  Volvo’s
All cars with a price below 5000
*/
console.log("Cars newer than 1999");
console.log(cars.filter(function(car){
    if(car.year > 1999){
        return car;
    }
}));

console.log("\nAl Volvo's");
console.log(cars.filter(function(car){
    if(car.make == "Volvo"){
        return car;
    }
}));

console.log("\nAll cars with a price below 5000");
console.log(cars.filter(function(car){
    if(car.price < 5000){
        return car;
    }
}));


/*
4a) Use map, join + just a little bit more to implement a function, that , given the cars array used above, will create,
and return a string with valid SQL statements to insert the data into a table with matching column names (id, year, make, model, price) as sketched below:

INSERT INTO cars (id,year,make,model,price) VALUES ( 1, 1997 'Ford','E350', 3000 );
...
*/



















