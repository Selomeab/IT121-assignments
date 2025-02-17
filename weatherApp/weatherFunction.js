// weatherFunction.js

const generateWeatherReport = (city, temperature, condition) => {
    return `The weather in ${city} is currently ${condition} with a temperature of ${temperature}°F.`;
};

export { generateWeatherReport };
