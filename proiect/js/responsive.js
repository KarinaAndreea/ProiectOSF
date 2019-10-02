function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "main-navbar") {
        x.className += " responsive";
    } else {
        x.className = "main-navbar";
    }
}