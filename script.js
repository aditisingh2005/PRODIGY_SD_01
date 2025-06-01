function celsiusToFahrenheit(c) {
    return (c * 9/5) + 32;
}

function fahrenheitToCelsius(f) {
    return (f - 32) * 5/9;
}

function celsiusToKelvin(c) {
    return c + 273.15;
}

function kelvinToCelsius(k) {
    return k - 273.15;
}

function fahrenheitToKelvin(f) {
    return celsiusToKelvin(fahrenheitToCelsius(f));
}

function kelvinToFahrenheit(k) {
    return celsiusToFahrenheit(kelvinToCelsius(k));
}

document.getElementById('convertBtn').addEventListener('click', function() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    const resultDisplay = document.getElementById('result');

    if (isNaN(inputTemp)) {
        resultDisplay.textContent = "Please enter a valid number!";
        return;
    }

    let convertedTemp;

    if (inputUnit === outputUnit) {
        convertedTemp = inputTemp;
    } else {
        // Convert input to Celsius first, then to output unit
        let tempInCelsius;

        switch(inputUnit) {
            case 'celsius':
                tempInCelsius = inputTemp;
                break;
            case 'fahrenheit':
                tempInCelsius = fahrenheitToCelsius(inputTemp);
                break;
            case 'kelvin':
                tempInCelsius = kelvinToCelsius(inputTemp);
                break;
        }

        switch(outputUnit) {
            case 'celsius':
                convertedTemp = tempInCelsius;
                break;
            case 'fahrenheit':
                convertedTemp = celsiusToFahrenheit(tempInCelsius);
                break;
            case 'kelvin':
                convertedTemp = celsiusToKelvin(tempInCelsius);
                break;
        }
    }

    resultDisplay.textContent = `${inputTemp} ${inputUnit.charAt(0).toUpperCase() + inputUnit.slice(1)} = ${convertedTemp.toFixed(2)} ${outputUnit.charAt(0).toUpperCase() + outputUnit.slice(1)}`;
});
