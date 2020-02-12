//a) Create the two arrays below, spelled exactly as they are given. This will form the start for all the following questions.
console.log("A)");
let boys = ["Peter", "lars", "Ole"];
let girls = ["Janne", "hanne", "Sanne"];
console.log("This is the boys array: " + boys);
console.log("This is the girls array: " + girls);
/*
 -Q does concat mutate an existing array?
 -A No it return a new Array.
 Example down below.
 */

//b) Create a new array called all, which should be a concatenation of the two arrays given above, starting with the boys and ending with the girls.
console.log("\nB)");
let all = boys.concat(girls);
console.log("This is the combined array: " + all);

/*
 c) The array type has a cool method to reduce an array into a single string join() (you will love this method)
 ·         Create a comma separated string containing all the names from the all-array, separated by commas.
 ·         Create a hyphen (-) separated string containing all the names from the all-array, separated by hyphens.
 */
console.log("\nC)");
let commaSepString = all.join(", ");
console.log(commaSepString);
let hyphenSepString = all.join("-");
console.log(hyphenSepString);

//d)  Add the names Lone and Gitte to the end of the array (remember, all can be done in one-liners)
console.log("\nD)");
all.push("Lone", "Gitte");
console.log(all);

//e)  Add the names Hans and Kurt to the start of the array
console.log("\nE)");
all.unshift("Hans", "Kurt");
console.log(all);

//f)  Remove the first name in the array (Hans)
console.log("\nF)");
all.shift();
console.log(all);

//g)  Remove the last name from the array (Gitte)
console.log("\nG)");
all.pop();
console.log(all);

//h) Remove Ole and Janne from the middle of the array
console.log("\nH)");
all.splice(3, 2);
console.log(all);

//i) Sanne thinks it’s unfair that the boys have to come first, reverse the all array, so that the girls come first.
console.log("\nI)");
all.reverse();
console.log(all);

//j) Peter thinks that this is just as unfair and suggests that the array should be sorted. Sort the array.
console.log("\nJ)");
all.sort();
console.log(all);

//k) The default sort algorithm doesn’t handle the situation where the name can be either capitalized or not. Write a user-defined sort method to fix this problem.
console.log("\nK)");
all.sort(function (a, b) {
    return a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
});
console.log(all);

//l) Convert all the names in the array to uppercase.
console.log("\nL)");
let allMap = all.map(function (a) {
    return a.toUpperCase();
});
console.log(allMap);

//m) Create a new array containing all the names that start with either “l” or “L” (hint: use the filter function with a sufficient callback). 
console.log("\nM)");
console.log(
        all.filter(function (a) {
            if (a.includes("l") || a.includes("L")) {
                return a;
            }
        })
        );

