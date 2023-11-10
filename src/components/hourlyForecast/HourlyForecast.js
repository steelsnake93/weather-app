// HourlyForecast.js
import './HourlyForecast.css'; // Assume you have a separate CSS file for styling

export default function HourlyForecast(hourlyData) {
  // Create the main container for the hourly forecast
  const hourlyForecastContainer = document.createElement('div');
  hourlyForecastContainer.className = 'forecast-container';

  // Create a title for the container
  const forecastTitle = document.createElement('h2');
  forecastTitle.textContent = 'Hourly Forecast';
  hourlyForecastContainer.appendChild(forecastTitle);

  // Create a container for the forecast items
  const forecastItemsContainer = document.createElement('div');
  forecastItemsContainer.className = 'forecast-items-container';

  // Loop over the hourly data to create an item for each hour
  hourlyData.forEach((hour) => {
    // Create a container for this hour's forecast
    const hourContainer = document.createElement('div');
    hourContainer.className = 'hour-container';

    // Create an element for the time
    const timeElement = document.createElement('p');
    timeElement.className = 'time';
    timeElement.textContent = hour.time; // Assuming 'hour.time' is a string like "3 PM"
    hourContainer.appendChild(timeElement);

    // Create an image to show the weather icon
    const iconElement = document.createElement('img');
    iconElement.className = 'icon';
    iconElement.src = hour.icon; // Assuming 'hour.icon' is the path to the icon image
    hourContainer.appendChild(iconElement);

    // Create a paragraph for temperature
    const tempElement = document.createElement('p');
    tempElement.className = 'temperature';
    tempElement.textContent = `${hour.temperature}°`; // Assuming 'hour.temperature' is the temperature
    hourContainer.appendChild(tempElement);

    // Add this hour's forecast to the container
    forecastItemsContainer.appendChild(hourContainer);
  });

  // Add the forecast items container to the main container
  hourlyForecastContainer.appendChild(forecastItemsContainer);

  return hourlyForecastContainer;
}
