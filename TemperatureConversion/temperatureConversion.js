"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const celsiusTemperatureStringInputField = document.querySelector("#celsius-temperature-input-field");
    const temperatureConversionForm = document.querySelector("#temperature-conversion-form");

    function convertCelsiusToFahrenheit(celsiusTemperature) {
        return celsiusTemperature * 9 / 5 + 32;
    }

    function convertCelsiusToKelvin(celsiusTemperature) {
        return celsiusTemperature + 273.15;
    }

    temperatureConversionForm.addEventListener("submit", function (e) {
        e.preventDefault();

        celsiusTemperatureStringInputField.classList.remove("invalid");
        const celsiusTemperatureString = celsiusTemperatureStringInputField.value.trim();
        const celsiusTemperature = Number(celsiusTemperatureString);

        const fahrenheitTemperatureOutput = document.querySelector("#fahrenheit-temperature-output");
        const kelvinTemperatureOutput = document.querySelector("#kelvin-temperature-output");

        const errorMessageOutput = document.querySelector("#error-message-output");

        if (celsiusTemperatureString === "" || Number.isNaN(celsiusTemperature)) {
            errorMessageOutput.style.display = "block";
            errorMessageOutput.textContent = "A valid numeric value must be entered!";

            celsiusTemperatureStringInputField.classList.add("invalid");

            fahrenheitTemperatureOutput.style.visibility = "hidden";
            kelvinTemperatureOutput.style.visibility = "hidden";
        } else {
            errorMessageOutput.style.display = "none";

            fahrenheitTemperatureOutput.style.visibility = "visible";
            fahrenheitTemperatureOutput.textContent = "Fahrenheit temperature: " + convertCelsiusToFahrenheit(celsiusTemperature);

            kelvinTemperatureOutput.style.visibility = "visible";
            kelvinTemperatureOutput.textContent = "Kelvin temperature: " + convertCelsiusToKelvin(celsiusTemperature);
        }
    });
});