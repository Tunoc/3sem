fetchFunction("http://localhost:8080/restPersonsDto/api/person/all", insertAllUsersInTable);

function fetchFunction(fetchUrl, callback) {
    fetch(fetchUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            callback(data);
        });
};

function insertAllUsersInTable(dataArray) {
    let printString = createTableFromArray(dataArray);
    document.getElementById("printTable").innerHTML = printString;
};

function createTableFromArray(array) {
    let tableHead = "<tr><th>ID</th>" + "<th>First Name</th>" + "<th>Last Name</th>" + "<th>Phone</th>";
    let htmlRows = "";
    array.PersonList.forEach(element => {
        let temp = "<tr>" +
            "<td>" + element.id + "</td>" +
            "<td>" + element.firstName + "</td>" +
            "<td>" + element.lastName + "</td>" +
            "<td>" + element.phone + "</td>" +
            "<tr>"
        htmlRows += temp;
    });
    return "<table border='1'>" + tableHead + htmlRows + "</table>";
};

const refreshBTN = document.getElementById("reload_Data_Btn");
refreshBTN.addEventListener("click", (event) => {
    fetchFunction("http://localhost:8080/restPersonsDto/api/person/all", insertAllUsersInTable)
});


//<input type="text" id="first_name" placeholder="First Name">
//<input type="text" id="last_name" placeholder="Last Name">
//<input type="text" id="phone" placeholder="Phone">
//<input type="text" id="street" placeholder="Street">
//<input type="text" id="city" placeholder="City">
//<input type="text" id="zip" placeholder="Zip



const getFirstName = document.getElementById("first_name").value;
const getLastName = document.getElementById("last_name").value;
const getPhone = document.getElementById("phone").value;
const getStreet = document.getElementById("street").value;
const getCity = document.getElementById("city").value;
const getZip = document.getElementById("zip").value;
let optionPOST = {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        firstName: getFirstName,
        lastName: getLastName,
        phone: getPhone,
        street: getStreet,
        city: getCity,
        zip: getZip
    })
}
const addNewPersonBtn = document.getElementById("addPerson");
addNewPersonBtn.addEventListener("click", (event) => {
    fetch("http://localhost:8080/restPersonsDto/api/person/add", optionPOST)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            fetchFunction("http://localhost:8080/restPersonsDto/api/person/all", insertAllUsersInTable)
        });

});