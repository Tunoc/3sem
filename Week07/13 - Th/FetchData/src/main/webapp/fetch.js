let url = "https://api.chucknorris.io/jokes/random";

let btn = document.getElementById("getButton");
btn.addEventListener("click", fetching);

function fetching(evt) {
    evt.preventDefault();
    const finalURL = url + "?category" + document.getElementById("inputValue").value;
    fetch(finalURL)
        .then(resp => resp.json())
        .then(data => {
            document.getElementById("div1").innerHTML = data.value;
            console.log("data", data.value);
        });
}

//This is prbably how i would have done with the all function as well if i could have.
//But i would have rolled through the values with a forEach loop in order to set everything into
//their own respective table cell.
let btn2 = document.getElementById("getAllButton");
btn2.addEventListener("click", fetchingAll);

function fetchingAll(evt) {
    evt.preventDefault();
    const finalURL = url;
    fetch(finalURL)
        .then(resp => resp.json())
        .then(data => {
            let test = "<tr><th>" + data.value + "</th></tr>"
            console.log(test);
            document.getElementById("div2").innerHTML = "<table border='1'>" +
                "<tr><th>Random Joke</th></tr><tr><td>" +
                data.value +
                "</td></tr>";
            console.log("data", data.value);
        });
}