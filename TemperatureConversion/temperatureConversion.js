document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.querySelector(".convert-button");
    const inputField = document.querySelector(".temperature-input-field");

    convertButton.addEventListener("click", () => {
        const inputValue = inputField.value.trim();
        const temperatureFahrenheitOutput = document.querySelector('[name = "temperatureFahrenheitOutput"]');
        const temperatureKelvinOutput = document.querySelector('[name = "temperatureKelvinOutput"]');

        const errorMessageOutput = document.querySelector('[name = "errorMessageOutput"]');

        if (inputValue === "") {
            errorMessageOutput.style.display = "none";
            temperatureFahrenheitOutput.style.visibility = "hidden";
            temperatureKelvinOutput.style.visibility = "hidden";
        } else if (!Number.isFinite(Number(inputValue))) {
            errorMessageOutput.style.display = "block";
            errorMessageOutput.textContent = "Input value must be a valid number!";
        } else {
            errorMessageOutput.style.display = "none";
            const temperatureCelsius = parseFloat(inputField.value);
            const temperatureFahrenheit = (temperatureCelsius * 9) / 5 + 32;

            temperatureFahrenheitOutput.style.visibility = "visible";
            temperatureFahrenheitOutput.textContent = "Fahrenheit temperature: " + temperatureFahrenheit;

            const temperatureKelvin = temperatureCelsius + 273.15;
            temperatureKelvinOutput.style.visibility = "visible";
            console.log(temperatureFahrenheit, temperatureKelvin);

            temperatureKelvinOutput.textContent = "Kelvin temperature: " + temperatureKelvin;
        }
    })
});