function clickMe(element) {
    console.log(this.id); //The value of id pointed to by this.
    console.log(element.target.id); //The value of id pointed to by the target property.
    document.getElementById("para").innerHTML = "Hi from " + this.id + " and " + element.target.id;

}

let button = document.getElementById("outer").onclick = clickMe;
button.onclick = clickMe;