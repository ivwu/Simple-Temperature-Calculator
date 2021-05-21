"use strict"

//get all fields
const fahrenheitField = document.getElementById("Fahrenheit")
const celciusField = document.getElementById("Celcius")

//define actions for window
window.onload = function() {
    const getFahrenheitBtn = document.getElementById("ConvertToF")
    getFahrenheitBtn.onclick = getFahrenheit

    const resetBtn = document.getElementById("reset")
    resetBtn.onclick = reset
}

//define function for conversion
function getFahrenheit () {
    let celcius = Number(celciusField.value)
    let result = (celcius * 9/5) + 32

    fahrenheitField.value = result.toFixed(2)
}

function reset () {
    fahrenheitField.value = null
    celciusField.value = null
}