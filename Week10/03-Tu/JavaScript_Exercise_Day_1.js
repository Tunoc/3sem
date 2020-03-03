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
    return name.includes("a") || name.includes("A");
}

function filterNamesWithout(name) {
    return !name.includes("a") || name.includes("A");
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
    return name.split("").reverse().join("");
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
    We use 3 of 4 paramenters from the map function.
    number = Current number from numbers array being parsed.
    index = current index form numbers array.
    array = the array that is currently being processed by the map function.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    if statement that returns either the number if we reach the last index.
    Or returns the cuttent index + the next.
*/

let numbers = [1, 3, 5, 10, 11];

let mappedNumbers = numbers.map((number, index, array) => {
    return (array.length - 1 === index) ? number : number + array[index + 1]
});

console.log("\n4-a)");
console.log(mappedNumbers);

/*
    b) Use map() to create the <a>’s for a navigation set and eventually a string like below (use join() to get the string of <a>’s):
    <nav>
        <a href=””>Lars</a>
        <a href=””>Peter</a>
        <a href=””>Jan</a>
        <a href=””>Bo</a>
    </nav>
*/
let namesArray = ["Lars", "Peter", "Jan", "Bo"];

let namesMap4b = namesArray.map((name) => {
    return "<a href=\"\">" + name + "</a>\n"; //Backsalsh n for better looks in console
}).join("");

console.log("\n4-b)");
console.log("<nav>\n" + namesMap4b + "</nav>");

/*
    c) Use map()+(join + ..) to create a string, representing a two column table, for the data given below:
    var names = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];
*/
let names4c = [
    { name: "Lars", phone: "1234567" },
    { name: "Peter", phone: "675843" },
    { name: "Jan", phone: "98547" },
    { name: "Bo", phone: "79345" },
    { name: "And", phone: "79345" }
];

function createTableFromArray(array) {
    let stringHead = "<tr><th>Name</th><th>Phone</th></tr>\n";
    let stringData = "";
    array.forEach(element => {
        let temp = "<tr>";
        temp += Object.values(element).map(function(a) {
            return "<td>" + a + "</td>";
        }).join("") + "</tr>\n";
        stringData += temp;
    });
    return "<table border='1'>\n" + stringHead + stringData + "</table>";
} //When we define the table border we are capable of creating a table in a HTML body.

console.log("\n4-c)");
console.log(createTableFromArray(names4c));


/*
    d) Create a single html-file and test the two examples given above.
    Hint: add a single div with an id=names, and use DOM-manipulation (document.getElementById.innerHTML = theString) to add the nav or table.
*/
/* <-Notes to assignment 4-d)
    Look at the; "4_dExercise.html" file.
*/

function ex4B() {
    document.getElementById("names").innerHTML = "<nav>" + namesMap4b + "</nav>";
}

function ex4C() {
    document.getElementById("names").innerHTML = createTableFromArray(names4c);
}

console.log("\n4-d)");
console.log("The HTML page look at line 277 to see where to go.");

/*
    e) Add a button with a click-handler and use the filter method to find only names containing the letter ‘a’. 
    Update the table to represent the filtered data.
*/
/* <-Notes to assignment 4-e)
    We reuse the filter function from earlier and then reuse our table creation function.
    However we need to make a new callback.
*/

//callbackFunction for the filter from earlier.
function filterNamesWith4e(nameObjectWithNameAndPhone) {
    return nameObjectWithNameAndPhone.name.includes("a") || nameObjectWithNameAndPhone.name.includes("A");
}

function ex4E() {
    let filteredArrayWithA = names4c.myFilter(filterNamesWith4e)
    document.getElementById("names").innerHTML = createTableFromArray(filteredArrayWithA);
}

console.log("\n4-e)");
console.log(createTableFromArray(names4c.myFilter(filterNamesWith4e)));



















//5. reduce
/*
    In most literature (definitely not only JavaScript) you will see map and filter explained together with the reduce function 
    (try this Google search: https://www.google.dk/search?q=map+filter+reduce&oq=map+filter+reduce&aqs=chrome..69i57j0l5.4472j0j7&sourceid=chrome&ie=UTF-8 ), 
    so obviously, this is a method we need to learn.
    Reduce is used to reduce an array into a single item (a number, string, object, etc). 
    This is a very common problem in all languages, for specific problems, so common, that the Array actually has a specific “reduce” method called join, 
    which can reduce an array into a string separated by whatever we choose.
    var all= ["Lars", "Peter", "Jan", "Bo"];
*/
/*
    a) Use join to create a single string from all, with names: comma-, space. and  # - separated.
*/
let all = ["Lars", "Peter", "Jan", "Bo"];
console.log("\n5-a)");
console.log(all.join(", #"));

/*
    b) Given this array: var numbers = [2, 3, 67, 33];
    Create a reducer callback that, with reduce(..),  will return the sum (105) of all values in numbers
*/
let numbers5b = [2, 3, 67, 33];
let numbers5bsum = numbers5b.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
//I set the initial value above to 0. If we call a reduce with an empty array without setting the 0 the system would throw a TypeError.
console.log("\n5-b)");
console.log(numbers5bsum);

/*
    c) Given this array:
    var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}]

    Create a reducer callback that, using the Array’s  reduce() method,  will return the average age of all members (25 for the provided array).
    Hint: The reduce callback takes two additional arguments as sketched below:
    var reducer = function(accumulator, member,index,arr ){
    Index is the current index for which the value (member) are passed in, and arr is the array.
    Use this to return different values from your reduce-function,  according to whether you have reached the last element or not.
*/
let members5c = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }
];

let reducer = members5c.reduce((accumulator, member, UnUsEdInDeX, arr) => accumulator + member.age / arr.length, 0);

console.log("\n5-c)");
console.log(reducer);

/*
    d) Imagine you were to create a system that could count votes for the presidential election in USA.
    Given this array of votes: 
    var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];
    Create a reduce function that will return a single object like {Clinton: 3, Trump: 4, None: 1 }
    Hints: You can check whether a property exists in a Javascript object, and add new properties as sketched below:
    var a = {}
    if (a["clinton"])
    console.log("I Will Not Print")
    a["clinton"] = 1;
    console.log("You will see me")
    console.log("Value of clinton "+ a["clinton"]);
*/

let votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];

let presSelect = votes.reduce(function(accumulator, candidate) {
    if (accumulator.hasOwnProperty(candidate)) {
        accumulator[candidate] += 1; //If we allready have a candidate in the dictionary then increase count.
    } else {
        accumulator[candidate] = 1; //If we don't have a candidate in the dictionary then create them and count.
    }
    return accumulator;
}, {}); //Set initial value to empty dictionary

console.log("\n5-d)");
console.log(presSelect);
















//6 Hoisting
/*
    Team up with another member of the class. Read about hoisting and implement at least two examples (individually) to illustrate that:
    Function declarations are completely hoisted
    var declarations are also hoisted, but not assignments made with them
*/
function hoisting_func() {
    console.log(hoisting_let);
    console.log(hoisting_var);
}
//hoisting_func(); //Cannot access 'hoisting_let' before initialization
//console.log(hoisting_let); //This is commented since we can't use a let if it hasn't been initialized yet.
let hoisting_let = "hoisting-Let";
console.log(hoisting_let);

console.log(hoisting_var); //However we can use a var if it hasn't been initialized yet, it will just be undefined.
var hoisting_var = "hoisting_var";
console.log(hoisting_var);
hoisting_func();


/*
    Explain to each other (as if it was the exam):
    Q - What hoisting is
    A - Hoisting is JavaScripts default behavior of moving declarations to the top of their respective scopes, druing compilation.
    But if it's a declaration the assignment part won't be moved.

    Q - What is the difference between the keyword var and the ES6 keyword let?
    A - The big difference is where the two are hoisted to.
    let will be hoisted in the respective block scope. 
    ^ in a function that would be right after the nearest starting curly bracket.

    var will be hoisted in the function scope or the global scope 
    ^ in a function that would be right after the first curly bracket of the function.
*/





//7 this in JavaScript
/*
    Team up with another member of the class. Read about this in JavaScript and implement at least three examples (individually) 
    to illustrate how this in JavaScript differs from what we know from Java. One of the examples should include an example of 
    explicit setting this using either call(), apply() or bind().
    Explain to each other, using the examples (as if it was the exam):
    How this in JavaScript differ from this in Java
    The purpose of the methods call(), apply() and bind()
*/





//8 Reusable Modules with Closures
/*
    1) 
    Implement and test the Closure Counter Example from w3schools:
    https://www.w3schools.com/js/js_function_closures.asp
    2)
    Implement a reusable function using the Module pattern that should encapsulate information about a person (name, and age) and returns an object with the following methods:
    setAge
    setName
    getInfo (should return a string like Peter, 45)
*/