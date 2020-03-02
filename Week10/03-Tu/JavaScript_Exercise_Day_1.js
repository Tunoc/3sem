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
    });
*/
/* <-Notes to assignment 1-a)
    The line below is the same as the block above.
*/
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
/* <-Notes to assignment 2-a)
    I can use different callback functions on the same filter.
    When i add the "OR" condition in the includes we could even have names that were spelt wrong
    and still have alle A's in the array, even though they were written with the "wrong" casing.
*/
function myFilter(array, callback) {
    let filteredNames = [];
    array.forEach(element => {
        if (callback(element)) {
            filteredNames.push(element);
        }
    });
    return filteredNames;
}

function filterNamesWith(name) {
    return name.includes("a" || "A");
}

function filterNamesWithout(name) {
    return !name.includes("a" || "A");
}

console.log("\nNames only with \"A\" <- MyFilter & More");
console.log(myFilter(names, filterNamesWith));
console.log(myFilter(names, filterNamesWithout));


/*
    b) Implement a function: myMap(array, callback)that, provided an array and a callback, 
    provides the same functionality as calling the existing map method on an array.
    Test the method with the same array and callback as in the example with the original map method.
*/
/* <-Notes to assignment 2-b)
    I could use different callback functions on the same myMap function.
    This could mean that i could reverse the index order of the array if that is what i wanted.
*/
function myMap(array, callback) {
    let mappedNames = [];
    array.forEach(element => {
        mappedNames.push(callback(element));
    });
    return mappedNames;
}

function reverseAllNamesInArray(name) {
    let splitString = name.split("");
    let reverseArray = splitString.reverse();
    let JoinArray = reverseArray.join("");
    return JoinArray;
}

console.log("\nReversed names <- MyMap");
console.log(myMap(names, reverseAllNamesInArray));




















//3) Using the Prototype property to add new functionality to existing objects
/*
    Every JavaScript function has a prototype property (this property is empty by default), 
    and you can attach properties and methods on this prototype property. 
    You add methods and properties on an object’s prototype property to make those methods and 
    properties available to all instances of that Object. You can even implement (classless) inheritance hierarchies with this property.
    The problem with our two user defined functions above (myFilter and myMap) is that they are not really attached to the Array Object. 
    They are just functions, where we have to pass in both the array and the callback.
    Create a new version of the two functions (without the array argument) 
    which you should add to the Array prototype property so they can be called on any array as sketched below:
    var names = ["Lars", "Peter", "Jan", "Bo"];
    var newArray = names.myFilter(function(name) {…});
*/
/* <-Notes to assignment 3)
    The; "this", that we are reffering to in the filter and map down below is a reference to the array that we use to call the filter function.
    We reuse the callback from earlier, (filterNamesWith) since it would be cuplicate code to insert it once again.
*/
Array.prototype.myFilter = function(callback) {
    let filterNames = [];
    this.forEach(element => {
        if (callback(element)) {
            filterNames.push(element);
        }
    });
    return filterNames;
};

console.log("\nNames only with \"A\" <- MyFilter - Prototype property");
console.log(names.myFilter(filterNamesWith));


Array.prototype.myMap = function(callback) {
    let mappedNames = [];
    this.forEach(element => {
        mappedNames.push(callback(element));
    });
    return mappedNames;
};

console.log("\nReversed names <- MyMap - Prototype property");
console.log(names.myMap(reverseAllNamesInArray));












//4) Getting really comfortable with filter and map
/*
    a) Given this array: var numbers = [1, 3, 5, 10, 11];
    Use map + a sufficient callback to map numbers into this array:
    var result = [4,8,15,21,11];
    Hints: The map() callback can take me additional arguments, see here
*/
/* <-Notes to assignment 4-a)
    The; "this", that we are reffering to in the map down below is a reference to the array(numbers).
    Using "this" we could call the map with a different array that numbers and it would still work.
*/
let numbers = [1, 3, 5, 10, 11];

let mappedNumbers = numbers.map((number, index) => {
    return number + this[index + 1];
});

console.log("\n4-a)");
console.log(mappedNumbers);