
/* just some basic ah init stuff yk */
const duck = document.getElementById("duck")
const hat = document.getElementById("hat")
const accessory = document.getElementById("accessory")
const background = document.getElementById("background")

/* colours */
const purpleDuck = document.getElementById("purpleDuck")
const greenDuck = document.getElementById("greenDuck")
const yellowDuck = document.getElementById("yellowDuck");
const redDuck = document.getElementById("redDuck");
const glitchDuck = document.getElementById("glitchDuck")

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

glitchDuck.addEventListener("click", function() {
    duck.src = "assets/glitchDuck.png";
});




/* hats */
const topHat = document.getElementById("topHat")
const tetoHair = document.getElementById("tetoHair")
const noneHat = document.getElementById("noneHat")
const flowerCrown = document.getElementById("flowerCrown")
const propellerHat = document.getElementById("propellerHat")

topHat.addEventListener("click", function() {
    hat.src = "assets/topHat.png";
});

tetoHair.addEventListener("click", function() {
    hat.src = "assets/tetoHair.png";
});

noneHat.addEventListener("click", function() {
    hat.src = ""
});

flowerCrown.addEventListener("click", function() {
    hat.src = "assets/flowerCrown.png"
});

propellerHat.addEventListener("click", function() {
    hat.src = "assets/propellerHat.png"
});

/* accessories */

const noneAcc = document.getElementById("noneAcc")
const redThing = document.getElementById("redThing")
const roseBite = document.getElementById("roseBite")
const lolipop = document.getElementById("lolipop")
const babyDucky = document.getElementById("babyDucky")

noneAcc.addEventListener("click", function(){
    accessory.src = ""
});

redThing.addEventListener("click", function(){
    accessory.src = "assets/redThing.png"
});

roseBite.addEventListener("click", function(){
    accessory.src = "assets/roseBite.png"
});

lolipop.addEventListener("click", function(){
    accessory.src = "assets/lolipop.png"
});

babyDucky.addEventListener("click", function(){
    accessory.src = "assets/babyDucky.png"
});


/* background */

const noneBack = document.getElementById("noneBackground")
const blue = document.getElementById("blue")
const orange = document.getElementById("orange")
const diamonds = document.getElementById("diamonds")
const grid = document.getElementById("grids")
const squiggles = document.getElementById("squiggles")


noneBack.addEventListener("click", function(){
    background.src = ""
});

blue.addEventListener("click", function(){
    background.src = "assets/blueBg.png"
});

orange.addEventListener("click", function(){
    background.src = "assets/weirdPattern.png"
});

diamonds.addEventListener("click", function(){
    background.src = "assets/diamondsBg.png"
});
grid.addEventListener("click", function(){
    background.src = "assets/gridBg.png"
});

squiggles.addEventListener("click", function(){
    background.src = "assets/weirdLines.png"
});