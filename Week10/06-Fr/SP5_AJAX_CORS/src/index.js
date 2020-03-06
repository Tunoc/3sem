//JS Event handling, HTML5 and inline SVG 
/*
    Needs to be able to highlight the selected contry.
    Fetch data from api.
*/

var prev;

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
    if (element.target.id.length > 2) {
        fetchFunction("http://restcountries.eu/rest/v1/alpha?codes=" + element.target.parentNode.id, pasteItAll);
    } else {
        fetchFunction("http://restcountries.eu/rest/v1/alpha?codes=" + element.target.id, pasteItAll);

    }
}

function notOnTheMap() {
    removeElementsIfExist();
    generateHTMLelements();
    document.getElementById("ifNotALandHere").innerHTML = "Not a land";
}



var printArray = ["ifNotALandHere", "pasteCountry", "pastePopulation", "pasteArea", "pasteBorders"];

function pasteItAll(data) {
    removeElementsIfExist();
    generateHTMLelements();
    populateElements(data);
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
    document.getElementById("pasteCountry").innerHTML = "Country: " + data[0].name;
    document.getElementById("pastePopulation").innerHTML = "Population: " + data[0].population;
    document.getElementById("pasteArea").innerHTML = "Area: " + data[0].area;
    document.getElementById("pasteBorders").innerHTML = "Borders: " + data[0].borders;
}

function removeElementsIfExist() {
    printArray.forEach(element => {
        let deletingThis = document.getElementById(element);
        if (deletingThis != null) {
            deletingThis.parentNode.removeChild(deletingThis);
        }
    });
};