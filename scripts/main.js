console.log("hey")
//Targeting buttons to add classes, to make the gray part toggle
//from being purple to gray.
//Each button is highlighting a section in the gray article. 

let flightButton = document.querySelector("#activate-flight")
flightButton.addEventListener("click", () => {
    let flight = document.querySelector("#flight")
    flight.classList.toggle("enabled")
    flight.classList.toggle("disabled")
})

let mindButton = document.querySelector("#activate-mindreading")
mindButton.addEventListener("click", () => {
    let mind = document.querySelector("#mindreading")
    mind.classList.toggle("enabled")
    mind.classList.toggle("disabled")
})

let xrayButton = document.querySelector("#activate-xray")
xrayButton.addEventListener("click", () => {
    let xray = document.querySelector("#xray")
    xray.classList.toggle("enabled")
    xray.classList.toggle("disabled")
})

//Here, I want this button to make everything purple. 
//I did that by replacing the disabled class with enabled.
let allPowersButton = document.querySelector("#activate-all")
allPowersButton.addEventListener("click", () => {
    let allPowers = document.getElementsByClassName("power")
    for (let i = 0; i < allPowers.length; i++) {
        allPowers[i].classList.replace("disabled","enabled")
    }
})

//This button is supposed to return to the disabled class, so
//I'm utilizing remove/add because I found that worked better
//than replace or toggle. 
let NoPowersButton = document.querySelector("#deactivate-all")
NoPowersButton.addEventListener("click", () => {
    let noPowers = document.getElementsByClassName("power")
    for (let i = 0; i < noPowers.length; i++) {
        noPowers[i].classList.remove("enabled")
        noPowers[i].classList.add("disabled")
    }
})