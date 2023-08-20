const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const convertButton = document.getElementById('convert');

convertButton.addEventListener('click', convertTemperature);

function convertTemperature() {
  if (celsiusInput.value !== '') {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = celsiusToFahrenheit(celsius);
    fahrenheitInput.value = fahrenheit.toFixed(2);
  } else if (fahrenheitInput.value !== '') {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = fahrenheitToCelsius(fahrenheit);
    celsiusInput.value = celsius.toFixed(2);
  }
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
