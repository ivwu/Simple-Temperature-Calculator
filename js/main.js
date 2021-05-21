"use strict"

//get all the fields

const fahrenheitField = document.getElementById("Fahrenheit")
const celciusField = document.getElementById("Celcius")

//define onclick actions for window

window.onload = function () {
    const getCelciusBtn = document.getElementById("ConvertToC")
    getCelciusBtn.onclick = getCelcius

    // const getFahrenheitBtn = document.getElementById("ConvertToF")
    // getFahrenheitBtn.onclick = getFahrenheit
}


//define function
function getCelcius () {
    let fahrenheit = Number(fahrenheitField.value)
    let result = (fahrenheit - 32) * 5/9

    celciusField.value = result.toFixed(2)
}

// function getFahrenheit () {
//     let celcius = Number(celciusField.value)
//     let result = (celcius * 9/5) + 32

//     fahrenheitField.value = result.toFixed(2)
// }