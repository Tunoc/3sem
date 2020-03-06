import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

updateJokes();

function updateJokes() {
    const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
    document.getElementById("jokes").innerHTML = allJokes.join("");
};


//Finding individual jokes.
const getJokeByIdElement = document.getElementById("joke_id");
const jokeByIdBtn = document.getElementById("joke_by_id_btn");
jokeByIdBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const newJokeByID = jokes.getJokeById(getJokeByIdElement.value - 1);
    if (newJokeByID !== undefined) {
        document.getElementById("joke_id_text").innerHTML = newJokeByID;
    } else {
        document.getElementById("joke_id_text").innerHTML = "No joke with this ID!";
    }
});

//Adding new Jokes
const getJokeToInsert = document.getElementById("joke_new");
const jokeToInsertBtn = document.getElementById("joke_new_btn");
jokeToInsertBtn.addEventListener("click", (event) => {
    event.preventDefault();
    jokes.addJoke(getJokeToInsert.value);
    updateJokes();
});

//2 Small application to display a quote of the hour
/*
    Remove all html (and only this) inside the div with the container class  (in index.htm in the public folder)
    Add a button to index.html + an empty div-tag, both with id’s so they are easy to “find”
    In index.js remove all code meant for the initial joke-sample, add an event listener to the button’s click event and pass a callback that will update the div tag in the index.html with a new quote.
    Initially, fetch the quote from a remote API: https://studypoints.info/jokes/api/jokes/period/hour 
    Use fetch() to get the quote.
    Use developer-tools in your browser and it’s network options to monitor the AJAX-request. Explain why, what you did above, is even possible, when we know the Same Origin Policy governs when/where AJAX-request can go
        Change the functionality to get a new quote every hour. (Hint: use setInterval() )
*/
//Click event for fetch hourly quote
const getQuoteOfTheHourBtn = document.getElementById("Ex2Btn");
const URL = "https://studypoints.info/jokes/api/jokes/period/hour";
getQuoteOfTheHourBtn.addEventListener("click", (event) => {
    event.preventDefault();
    fetchFunction(URL, hourlyUpdateText);
});

//setInterval to auto-fetch the hourly quote
setInterval(function hourlyAutoUpdate() {
    fetchFunction(URL, hourlyUpdateText);
}, 3600000);

//Hourly update text from fetch.
function hourlyUpdateText(data) {
    document.getElementById("Ex2DivId").innerHTML = data.joke;
}

//Hourly quote fetch.
function fetchFunction(fetchUrl, callback) {
    fetch(fetchUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            callback(data);
        });
};



//JS Event handling, HTML5 and inline SVG 
/*
    Download the file: fourHearts.svg, and copy the content into the clipboard.
    Either create a new SPA project or (suggested)  just paste the content into the body of your existing project.
    Add the necessary event handlers, so when pressing each of the “hearts”, it will write the  message North, South, East or West respectively.
*/
const eventBubbling = document.getElementById("svg2");
eventBubbling.addEventListener("click", (element) => {
    element.target.id == "svg2" ? notOnTheLeaf(element) : onTheLeaf(element);
    //If statement to check, if we have clicked on the svg2 div or an actual leaf. Respective answers.
});

function onTheLeaf(element) {
    document.getElementById("cloverWithPolesPaste").innerHTML = element.target.parentNode.id;
    /*
        We use the parent node since element.target.id would give us either - 'rect' or one of the 2 'paths' from the clovers.
        When we then add the parentNode we "jump back" to the parent of the rect and paths. This means we then get the id from the 'g' tag.
        wtch is either, "north", "south", "east" or "west"
    */
}

function notOnTheLeaf(element) {
    document.getElementById("cloverWithPolesPaste").innerHTML = "Not a leaf";
    //This id done if someone clicks besides a leaf but still withing the svg files "div/class" or what it's called for a svg file.
}