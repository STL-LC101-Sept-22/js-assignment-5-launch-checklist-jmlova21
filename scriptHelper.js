// Write your helper functions here!
require("isomorphic-fetch");
// window.addEventListener("load", function () {

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `
  <h2>Mission Destination</h2>
    <ol>
      <li>Name: </li>
      <li>Diameter: </li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: </li>
      <li>Number of Moons: </li>
  </ol>
  <img src="">
  `
};

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (!isNaN(Number)(testInput)) {
    console.log("Not a Number");
  } else {
    console.log("Is a Number");
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotName = document.querySelector("input[name=pilotName]");
  let copilotName = document.querySelector("input[name=copilotName]");
  let fuel = document.querySelector("input[name=fuelLevel]");
  let cargoMass = document.querySelector("input[name=cargoStatus]");

  if (pilotName.value === "" || copilotName.value === "" || fuel.value === "" || cargoMass.value === "") {
    alert("All fields are required!");
  } else if (isNan(fuel.value) === true || isNan(cargoMass.value) === true) {
    alert("Please enter a valid number for Fuel Level and Cargo Mass");
  } else if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false) {
    alert("Please enter name for Pilot and Co-pilot");
  } else
    pilotStatus.innerHTML = `Pilot ${pilot} is ready`;
  copilotStatus.innerHTML = `Co-pilot ${copilot} is ready`;
}

if (fuel.value <= 10000) {
  document.getElementById("faultyItems").style.visibility = "visible";
  document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
  document.getElementById("launchStatus").style.color = "red";
  document.getElementById("fuelStatus").innerHTML = "The fuel level is too low for launch";
} else {
  document.getElementById("fuelStatus").innerHTML = "The fuel level high enough for launch";
}
if (cargoMass.value >= 10000) {
  document.getElementById("faultyItems").style.visibility = "visible";
  document.getElementById("launchStatus").innerHTML = "The shuttle not ready for launch";
  document.getElementById("launchStatus").style.color = "red";
  document.getElementById("cargoStatus").innerHTML = "The cargo mass is too low for launch";
} else {
  document.getElementById("cargoStatus").innerHTML = "The cargo mass is low enough for launch";
}
if (cargoMass.value <= 10000 && fuel.value >= 10000) {
  document.getElementById("faultyItems").style.visibility = "hidden";
  document.getElementById("launchStatus").innerHTML = "The shuttle is ready for launch";
  document.getElementById("launchStatus").style.color = "green";
  document.getElementById("cargoStatus").innerHTML = "The cargo mass is low enough for launch";
}

async function myFetch() {
  let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
    return response.json()
  });
  return planetsReturned;
}

function pickPlanet(planets) {
  let randomIndex = math.floor(Math.random() * planets.length);
  return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
