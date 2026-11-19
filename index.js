// Grab Values
const celsius = document.querySelector('#celsius-temp');
const fahrenheit = document.querySelector('#Fahrenheit-temp');
const kelvin = document.querySelector('#kelvin-temp');

// Calculate celsius to fahrenheit & kelvin
celsius.addEventListener('keydown', (event) => {

    // Grab temperature value
    if(event.key === 'Enter'){
        const celsiusValue = event.target.value;
        // Calculate to fahreheit
        const celsiusToFahrenheit = (celsiusValue * 1.8) + 32;
        // Add value to fahrenheit
        fahrenheit.value = celsiusToFahrenheit.toFixed(1);
        // Add value to kelvin
        const celsiusToKelvin = celsiusValue + 273.15;
        kelvin.value = celsiusToKelvin;
    }
});

// Calculate Fahrenheit to celsius & kelvin
fahrenheit.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        // Grab fahrenheit value
        const fahrenheitValue = event.target.value;
        // Calculate to celsius
        const fahrenheitToCelsius = (fahrenheitValue - 32) / 1.8;
        // Store results in celsius
        celsius.value = fahrenheitToCelsius.toFixed(1);
        // Create fraction
        const fraction = (5 / 9);
        // Calculate to kelvin
        const fahrenheitToKelvin = (fahrenheitValue - 32) * fraction + 273.15;
        // Store kelvin value
        kelvin.value = fahrenheitToKelvin.toFixed(1);
    }
});


