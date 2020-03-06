import 'bootstrap/dist/css/bootstrap.css'

//Show ass users
let optionGET = {
    method: "GET",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}
fetchFunction(new Event("FakeEvent"), "http://localhost:3333/api/users/", optionGET, insertAllUsersInTable);

function fetchFunction(event, fetchUrl, options, callback) {
    event.preventDefault();
    fetch(fetchUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            callback(data);
        });
};

//callback
function insertAllUsersInTable(dataArray) {
    if (dataArray.status) {
        document.getElementById("printTableHere").innerHTML = dataArray.msg;
    } else {
        let printString = createTableFromArray(dataArray);
        document.getElementById("printTableHere").innerHTML = printString;
    }
}

function createTableFromArray(arrayOfObj) {
    let stringHead = "<tr><th>Id</th><th>Age</th><th>Name</th><th>Gender</th><th>Email</th></tr>\n";
    let stringData = "";
    arrayOfObj.forEach(element => {
        let temp = "<tr>" +
            "<td>" + element.id + "</td>" +
            "<td>" + element.age + "</td>" +
            "<td>" + element.name + "</td>" +
            "<td>" + element.gender + "</td>" +
            "<td>" + element.email + "</td></tr>";
        //I had to hardcord the table since the ID would be added to the table after the fetch insert further down. That would mess up the order if i jused join
        //temp += Object.values(element).map(function(a) { //<-First version.
        //    return "<td>" + a + "</td>";
        //}).join("") + "</tr>\n";
        stringData += temp;
    });
    return "<table border='1'>\n" + stringHead + stringData + "</table>";
}

//SHOW SINGLE USER GIVEN ID
const inputByIdBtn = document.getElementById("inputBtn1");
inputByIdBtn.addEventListener("click", (event) => {
    fetchFunction(event, "http://localhost:3333/api/users/" + document.getElementById("text_input1").value, optionGET, insertSpecificUser)
});

//callback
function insertSpecificUser(dataArray) {
    if (dataArray.status) {
        document.getElementById("printSingleUserHere").innerHTML = dataArray.msg;
    } else if (dataArray.length >= 2) {
        document.getElementById("printSingleUserHere").innerHTML = "You haven't searched for a specific id.";
    } else {
        let printString = [];
        printString.push(dataArray);
        printString = createTableFromArray(printString);
        document.getElementById("printSingleUserHere").innerHTML = printString;
    }
}

//ADD NEW USER
const getNewUserAge = document.getElementById("text_age").value;
const getNewUserName = document.getElementById("text_name").value;
const getNewUserGender = document.getElementById("text_gender").value;
const getNewUserEmail = document.getElementById("text_email").value;
let optionPOST = {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        age: getNewUserAge,
        name: getNewUserName,
        gender: getNewUserGender,
        email: getNewUserEmail
    })
}
const addNewUserBtn = document.getElementById("addNewUserBtn1");
addNewUserBtn.addEventListener("click", (event) => {
    fetchFunction(event, "http://localhost:3333/api/users/", optionPOST, addNewUser)
});

//callback
function addNewUser(dataArray) {
    if (dataArray.status) {
        document.getElementById("addUserError").innerHTML = dataArray.msg;
    } else {
        //Reusing the fetch function from earlier to get all
        fetchFunction(new Event("FakeEvent"), "http://localhost:3333/api/users/", optionGET, insertAllUsersInTable);
    }
}


//DELETE
const deleteByIdBtn = document.getElementById("deleteBtn1");
let optionDELETE = {
    method: "DELETE",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}
deleteByIdBtn.addEventListener("click", (event) => {
    fetchFunction(event, "http://localhost:3333/api/users/" + document.getElementById("text_delete1").value, optionDELETE, deleteUser)
});

//callback
function deleteUser(dataArray) {
    if (dataArray.status) {
        document.getElementById("deleteUserError").innerHTML = dataArray.msg;
    } else {
        //Reusing the fetch function from earlier to get all
        fetchFunction(new Event("FakeEvent"), "http://localhost:3333/api/users/", optionGET, insertAllUsersInTable);
    }
}