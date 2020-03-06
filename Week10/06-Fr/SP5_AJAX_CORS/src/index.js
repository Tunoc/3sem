import 'bootstrap/dist/css/bootstrap.css'

//JS Event handling, HTML5 and inline SVG 
/*
    Needs to be able to highlight the selected contry.
    Fetch data from api.
*/

var prev;

function fetchFunction(fetchUrl, callback) {
    event.preventDefault();
    fetch(fetchUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            callback(data);
        });
};

const eventBubbling = document.getElementById("svg2");
eventBubbling.addEventListener("click", (element) => {
    if (prev == null) {
        prev = element;
        element.target.style = "fill: red";
    } else {
        prev.target.style = "fill:#c0c0c0";
        element.target.style = "fill: red";
        prev = element;
    }
    element.target.id == "svg2" ? notOnTheMap(element) : onLand(element);
});

function onLand(element) {
    if (element.target.id.length > 2) {
        fetchFunction("http://restcountries.eu/rest/v1/alpha?codes=" + element.target.parentNode.id, pasteItAll);

    } else {
        fetchFunction("http://restcountries.eu/rest/v1/alpha?codes=" + element.target.id, pasteItAll);

    }
}

function notOnTheMap(element) {
    document.getElementById("ifNotALandHere").innerHTML = "Not a land";
    document.getElementById("pasteCountry").innerHTML = "";
    document.getElementById("pastePopulation").innerHTML = "";
    document.getElementById("pasteArea").innerHTML = "";
    document.getElementById("pasteBorders").innerHTML = "";
}

function pasteItAll(data) {
    document.getElementById("ifNotALandHere").innerHTML = "";
    document.getElementById("pasteCountry").innerHTML = "Country: " + data[0].name;
    document.getElementById("pastePopulation").innerHTML = "Population: " + data[0].population;
    document.getElementById("pasteArea").innerHTML = "Area: " + data[0].area;
    document.getElementById("pasteBorders").innerHTML = "Borders: " + data[0].borders;
}