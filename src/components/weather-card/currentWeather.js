import { location, weatherIconsMap } from './weather-icons';
import './style.css';

export default function currentWeather(data) {
  const currentWeatherElement = document.createElement('div');
  currentWeatherElement.className = 'current-weather';
  const customIcon = weatherIconsMap[data.icon] || 'path_to_default_icon'; // Ensure you have a default icon

  currentWeatherElement.innerHTML = `
  <div class="container-box">
    <div class="date">
      <p><span class="today">Today</span><br><span class='date-data'>${data.dateText}</span></p>
    </div>
    <div class="weather-data">
      <div class="temp-and-icon">
        <div class="temp">
          <div class="temp-data">
            <h1 class="temp-num">${data.temperature} <span class="deg">&deg;</span></h1>
            <p class="decription-text">${data.weatherDescription}</p>
          </div>
          <div class="location-data">
            <img class='filter' src=${location} width='20px' height='20px'>
            <h3>${data.cityName}</h3>
          </div>
        </div>
        <picture class='weather-img'>
          <img class='weather-icon' src=${customIcon} width='200px' height='200px'>
        </picture>
      </div>
    </div>
  </div>
  `;
  return currentWeatherElement;
}