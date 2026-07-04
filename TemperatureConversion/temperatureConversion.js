"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.querySelector("#temperature-input-field");
    const temperatureConversionForm = document.querySelector("#temperature-conversion-form");

    function convertCelsiusToFahrenheit(celsiusTemperature) {
        return celsiusTemperature * 9 / 5 + 32;
    }

    function convertCelsiusToKelvin(celsiusTemperature) {
        return celsiusTemperature + 273.15;
    }

    temperatureConversionForm.addEventListener("submit", function(e) {
        e.preventDefault();

        inputField.classList.remove("invalid");

        const inputValue = inputField.value.trim();

        const fahrenheitTemperatureOutput = document.querySelector("#fahrenheit-temperature-output");
        const kelvinTemperatureOutput = document.querySelector("#kelvin-temperature-output");

        const errorMessageOutput = document.querySelector("#error-message-output");

        if (inputValue === "") {
            errorMessageOutput.style.display = "block";
            errorMessageOutput.textContent = "Field must not be empty!";

            inputField.classList.add("invalid");

            fahrenheitTemperatureOutput.style.visibility = "hidden";
            kelvinTemperatureOutput.style.visibility = "hidden";
        } else if (!Number.isFinite(Number(inputValue))) {
            errorMessageOutput.style.display = "block";
            errorMessageOutput.textContent = "Input value must be a valid number!";

            inputField.classList.add("invalid");
        } else {
            errorMessageOutput.style.display = "none";

            const celsiusTemperature = parseFloat(inputField.value);

            fahrenheitTemperatureOutput.style.visibility = "visible";
            fahrenheitTemperatureOutput.textContent = "Fahrenheit temperature: " + convertCelsiusToFahrenheit(celsiusTemperature);

            kelvinTemperatureOutput.style.visibility = "visible";
            kelvinTemperatureOutput.textContent = "Kelvin temperature: " + convertCelsiusToKelvin(celsiusTemperature);
        }
    });
});