// Write your JavaScript code here!

// const { formSubmission, myFetch, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function () {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let randomPlanet = pickPlanet(listedPlanets);
        console.log('here', randomPlanet)
        addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });

    let faultyItemsListElement = document.getElementById("faultyItems");
    faultyItemsListElement.style.visibility = "hidden";

    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let pilotName = document.querySelector("input[name=pilotName]");
        let pilot = pilotName.value;

        let copilotName = document.querySelector("input[name=copilotName]");
        let copilot = copilotName.value;

        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let fuel = fuelLevel.value;

        let cargoMass = document.querySelector("input[name=cargoMass]");
        let cargo = cargoMass.value;

        formSubmission(document, faultyItemsListElement, pilot, copilot, fuel, cargo);

    })


});