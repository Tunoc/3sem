let displayTxt = "";

function clickMe(element) {
    if (element.target.innerText === "=") {
        if (displayTxt.includes("+")) {
            let temp = displayTxt.split("+");
            displayTxt = Number(temp[0]) + Number(temp[1]);
        } else if (element.target.innerText === "-") {
            let temp = displayTxt.split("-");
            displayTxt = Number(temp[0]) - Number(temp[1]);
        } else if (element.target.innerText === "*") {
            let temp = displayTxt.split("*");
            displayTxt = Number(temp[0]) * Number(temp[1]);
        } else if (element.target.innerText === "/") {
            let temp = displayTxt.split("/");
            displayTxt = Number(temp[0]) / Number(temp[1]);
        }
    } else {
        displayTxt += (element.target.innerText);
    }
    document.getElementById("display").innerHTML = displayTxt;
}

let button = document.getElementById("buttons").onclick = clickMe;

function submitMeRemB(evt) {
    evt.preventDefault();
    displayTxt = "";
    document.getElementById("display").innerHTML = "";
}

let subFormRemB = document.getElementById("reset").onsubmit = submitMeRemB;