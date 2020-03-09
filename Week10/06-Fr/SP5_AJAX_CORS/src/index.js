//JS Event handling, HTML5 and inline SVG 
/*
    Needs to be able to highlight the selected contry.
    Fetch data from api.
*/

var prev = null;

function fetchFunction(fetchUrl, callback) {
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
    element.target.id == "svg2" ? notOnTheMap() : onLand(element);
});

function onLand(element) {
    if (element.target.id == "Kosovo") {
        //Cosovo dosn't hav an id in the SVG file. <- Therfore we can search for it with the full name.
        fetchFunction("https://restcountries.eu/rest/v2/name/" + element.target.id + "?fullText=trueCode", pasteItAll);
    } else if (element.target.id.length > 2) {
        fetchFunction("http://restcountries.eu/rest/v1/alpha?codes=" + element.target.parentNode.id, pasteItAll);
    } else {
        fetchFunction("http://restcountries.eu/rest/v1/alpha?codes=" + element.target.id, pasteItAll);

    }
}

/*
    I am using the keywords that we recieve from the fetch call and add them in the list down below here.
    This gives me the opportunity to increase the amount of data i want to show and decrease it with just adding/removing 1 extra parameter.
    http://restcountries.eu/rest/v1/alpha?codes=dk
    ^ for example - "altSpellings", "languages" or "timezones"
*/
var printArray = ["ifNotALandHere", "name", "population", "area", "borders"];

/*
    For the not on the map and paste it all, i also could have made a check if the fields allready have been generated then don't delete them
    But just blank them out. If we have to generate and remove all the fields each time, depending on data size that would probablt be quite taxing
    on the systems?
*/
function notOnTheMap() {
    removeElementsIfExist();
    generateHTMLelements();
    document.getElementById("ifNotALandHere").innerHTML = "Not a land";
}

function pasteItAll(data) {
    removeElementsIfExist();
    generateHTMLelements();
    populateElements(data);
    document.getElementById("ifNotALandHere").innerHTML = "";
}

function generateHTMLelements() {
    let pasteDiv = document.getElementById("pasteHereContainer");
    printArray.forEach(element => {
        let HTMLelement = document.createElement("p");
        HTMLelement.setAttribute("id", element);
        HTMLelement.innerHTML = "";
        pasteDiv.appendChild(HTMLelement);
    });
};

function populateElements(data) {
    let object = data[0];
    printArray.forEach(element => {
        document.getElementById(element).innerHTML = element.charAt(0).toUpperCase() + element.substring(1) + ": " + object[element];
    });
    /*
        document.getElementById("pasteCountry").innerHTML = "Country: " + data[0].name;
        document.getElementById("pastePopulation").innerHTML = "Population: " + data[0].population;
        document.getElementById("pasteArea").innerHTML = "Area: " + data[0].area;
        document.getElementById("pasteBorders").innerHTML = "Borders: " + data[0].borders;
    */
}

function removeElementsIfExist() {
    printArray.forEach(element => {
        let deletingThis = document.getElementById(element);
        if (deletingThis != null) {
            deletingThis.parentNode.removeChild(deletingThis);
        }
    });
};