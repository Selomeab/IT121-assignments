// main.js

import { generateWeatherReport } from './weatherFunction.js';

// Define the city, temperature in Fahrenheit, and condition
const city = 'Seattle';
const temperatureFahrenheit = 44; // example temperature in Fahrenheit
const condition = 'rainy';

// Use the function to generate a weather report
const weatherReport = generateWeatherReport(city, temperatureFahrenheit, condition);

// Display the weather report dynamically in the <div> with id="output"
document.getElementById('output').innerHTML = weatherReport;
