let array = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

upDateList();

function upDateList() {
    let htmlString = "<ul>" +
        array.map(function(a) {
            return "<li>" + a + "</li>";
        }).join("") +
        "</ul>";
    console.log(htmlString);
    document.getElementById("div1").innerHTML = htmlString;
}

let subForm = document.getElementById("fid").onsubmit = submitMe;

function submitMe(evt) {
    evt.preventDefault();
    array.push(document.getElementById("name").value);
    upDateList();
    console.log(array);
}

let subFormRemB = document.getElementById("fIdBot").onsubmit = submitMeRemB;

function submitMeRemB(evt) {
    evt.preventDefault();
    array.pop();
    upDateList();
    console.log(array);
}

let subFormRemT = document.getElementById("fIdTop").onsubmit = submitMeRemT;

function submitMeRemT(evt) {
    evt.preventDefault();
    array.shift();
    upDateList();
    console.log(array);
}

/*
Next part of the assignment.
*/
let cars = [
    { Id: 1, Year: 1997, Make: 'Ford', Model: 'E350', Price: 3000 },
    { Id: 2, Year: 1999, Make: 'Chevy', Model: 'Venture', Price: 4900 },
    { Id: 3, Year: 2000, Make: 'Chevy', Model: 'Venture', Price: 5000 },
    { Id: 4, Year: 1996, Make: 'Jeep', Model: 'Grand Cherokee', Price: 4799 },
    { Id: 5, Year: 2005, Make: 'Volvo', Model: 'V70', Price: 44799 }
];

upDateTable(cars);

function upDateTable(CarArray) {
    let htmlStringHead = Object.getOwnPropertyNames(CarArray[0]);
    htmlStringHead = "<tr>" +
        htmlStringHead.map(function(a) {
            return "<th>" + a + "</th>";
        }).join("") +
        "</tr>";
    console.log(htmlStringHead);
    let htmlStringValue = "<tr>";
    CarArray.forEach(element => {
        let temp = Object.values(element).map(function(a) {
                return "<td>" + a + "</td>";
            }).join("") +
            "</tr>";
        htmlStringValue += temp;
    });
    console.log(htmlStringValue);
    document.getElementById("div3").innerHTML = "<table border='1'>" + htmlStringHead + htmlStringValue;
}

let subFormTable = document.getElementById("fIdTable").onsubmit = submitMeTable;

function submitMeTable(evt) {
    evt.preventDefault();
    let filteredCarArray = cars.filter(function(e) {
        return e.Price < document.getElementById("lPrice").value;
    })
    upDateTable(filteredCarArray);
    console.log(filteredCarArray);
}