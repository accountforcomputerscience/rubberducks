/* just some basic ah init stuff yk */
const duck = document.getElementById("duck")
const hat = document.getElementById("hat")

/* colours */
const purpleDuck = document.getElementById("purpleDuck")
const greenDuck = document.getElementById("greenDuck")
const yellowDuck = document.getElementById("yellowDuck");
const redDuck = document.getElementById("redDuck");


redDuck.addEventListener("click", function() {
    duck.src = "assets/redDuck.png";
});

yellowDuck.addEventListener("click", function() {
    duck.src = "assets/yellowDuck.png";
});

purpleDuck.addEventListener("click", function() {
    duck.src = "assets/purpleDuck.png";
});


greenDuck.addEventListener("click", function() {
    duck.src = "assets/greenDuck.png";
});






/* hats */
const tetoHair = document.getElementById("tetoHair")


topHat.addEventListener("click", function() {
    hat.src = "assets/topHat.png";
});

propellerHat.addEventListener("click", function() {
    hat.src = "assets/redduck.png";
});

none.addEventListener("click", function() {
    hat.src = "assets/redduck.png";
});

tetoHair.addEventListener("click", function() {
    hat.src = "assets/tetoHair.png";
});


/* accessories */

