//1) Using existing functions that takes a callback as an argument
/*
a) Using the filter method:
Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.). 
Use the filter method to create a new array with only names that contains the letter ‘a’.
*/
let names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "ect"];
console.log("\nOriginal Array");
console.log(names);

/*
let namesWithA = names.filter(function(name) {
    return name.includes("a");
});*/
//The line below is the same as the block above.
let namesWithA = names.filter(name => name.includes("a"));
console.log("\nNames only with \"A\"");
console.log(namesWithA);

/*
b) Using the map method:
Use the names-array created above, and, using its map method, create a new array with all names reversed.
*/
let reverseArray = names.map(function(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
});
console.log("\nReversed names");
console.log(reverseArray);


//2) Implement user defined functions that take callbacks as an argument
/*
a) Implement a function: myFilter(array, callback)that takes an array as the first argument, 
and a callback as the second and returns a new (filtered) array according to the code provided in the callback 
(this method should provide the same behaviour as the original filter method).
Test the method with the same array and callback as in the example with the original filter method.
*/

function myFilter(array, callback) {
    return callback(array);
}

function filterNameWithA(name) {
    return name.includes("a");
}

console.log(myFilter(names, filterNameWithA))


/*
console.log(functionFilteredNames);

let functionFilteredNames = names.filter(function(namesWithA) {
    return namesWithA.includes("a");
});*/