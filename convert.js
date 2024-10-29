/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
Hi
*/



let btn = document.getElementById("btn")
let input = document.getElementById("input")

let length = document.getElementById("Length")
let volume = document.getElementById("Volume")
let mass = document.getElementById("Mass")

btn.addEventListener("click", function(){
    length.innerHTML = `${input.value} meters = ${meterToFeet()} feet | ${input.value} feet = ${feetToMeter()} meters`
    volume.innerHTML = `${input.value} liters = ${litersToGallons()} gallons | ${input.value} gallons = ${gallonsToLiters()} liters`
    mass.innerHTML = `${input.value} kilo = ${kiloToPounds()} pounds | ${input.value} pounds = ${poundsToKilos()} kilos`
})



function meterToFeet(){
    let val = input.value * 3.281
    return val.toFixed(2)
    
}

function feetToMeter(){
    let val = input.value / 3.218
    return val.toFixed(2)
}

function litersToGallons(){
    let val = input.value * 0.264
    return val.toFixed(2)

}

function gallonsToLiters(){
    let val = input.value / 0.264
    return val.toFixed(2)
}

function kiloToPounds(){
    let val = input.value * 2.204
    return val.toFixed(2)

}

function poundsToKilos(){
    let val = input.value / 2.024
    return val.toFixed(2)
}
