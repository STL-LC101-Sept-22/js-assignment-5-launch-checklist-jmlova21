// Write your helper functions here!
require("isomorphic-fetch");
// window.addEventListener("load", function () {
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `
 <h2>Mission Destination</h2>
   <ol>
     <li>Name: ${name}</li>
     <li>Diameter: ${diameter}</li>
     <li>Star: ${star}</li>
     <li>Distance from Earth: ${distance}</li>
     <li>Number of Moons: ${moons}</li>
 </ol>
 <img src="${imageUrl}">
 `
};
function validateInput(testInput) {
  let numberInput = Number(testInput);
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(numberInput)) {
    return "Not a Number";
  } else if (!isNaN(numberInput)) {
    return "Is a Number";
  }
}
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  // let pilotName = document.querySelector("input[name=pilotName]");
  // let copilotName = document.querySelector("input[name=copilotName]");
  // let fuel = document.querySelector("input[name=fuelLevel]");
  // let cargoMass = document.querySelector("input[name=cargoStatus]");
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");

  if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    alert("All fields are required!");
  } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
    alert("Please enter a valid input type");
  } else {
    list.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Copilot  is ready for launch`;
    let launchStatus = document.getElementById("launchStatus");
    if (fuelLevel < 10000 & cargoLevel <= 10000) {
      fuelStatus.innerHTML = "Fuel level too low for launch";
      cargoStatus.innerHTML = "Cargo mass low enough for launch"
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "#C7254E";
    } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
      fuelStatus.innerHTML = "Fuel level high enough for launch"
      cargoStatus.innerHTML = "Cargo mass too heavy for launch"
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "#C7254E";
    } else if (fuelLevel < 10000 && cargoLevel > 10000) {
      fuelStatus.innerHTML = "Fuel level too low enough for launch"
      cargoStatus.innerHTML = "Cargo mass too heavy for launch";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "#C7254E";
    } else {
      fuelStatus.innerHTML = "Fuel level high enough for launch"
      cargoStatus.innerHTML = "Cargo mass low enough for launch"
      launchStatus.innerHTML = "Shuttle is ready for Launch";
      launchStatus.style.color = "#419F6A";
    }
  }
}


// document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
// document.getElementById("launchStatus").style.color = "red";
// document.getElementById("fuelStatus").innerHTML = "The fuel level is too low for launch";
//     } else {
//   document.getElementById("fuelStatus").innerHTML = "The fuel level high enough for launch";
// }
// if (cargoMass.value >= 10000) {
//   document.getElementById("faultyItems").style.visibility = "visible";
//   document.getElementById("launchStatus").innerHTML = "The shuttle not ready for launch";
//   document.getElementById("launchStatus").style.color = "red";
//   document.getElementById("cargoStatus").innerHTML = "The cargo mass is too low for launch";
// } else {
//   document.getElementById("cargoStatus").innerHTML = "The cargo mass is low enough for launch";
// }
// if (cargoMass.value <= 10000 && fuel.value >= 10000) {
//   document.getElementById("faultyItems").style.visibility = "hidden";
//   document.getElementById("launchStatus").innerHTML = "The shuttle is ready for launch";
//   document.getElementById("launchStatus").style.color = "green";
//   document.getElementById("cargoStatus").innerHTML = "The cargo mass is low enough for launch";
// }
//   }

async function myFetch() {
  let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
    return response.json()
  });
  return planetsReturned;
}
function pickPlanet(planets) {
  let randomIndex = Math.floor(Math.random() * planets.length);
  // console.log(planets[randomIndex])
  return planets[randomIndex];
}
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;