changeColors(document.getElementsByTagName("div"));

function changeColors(list) {
    for (let item of list) {
        item.style.backgroundColor = "purple";
        console.log(item);
    }
}

let button = document.getElementById("b1");
button.onclick = clickMe;

function clickMe() {
    document.getElementById("Name1").style.backgroundColor = "red";
    document.getElementById("Name2").style.backgroundColor = "yellow";
    document.getElementById("Name3").style.backgroundColor = "blue";
}