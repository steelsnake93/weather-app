import descriptionCard from "./components/description-card/descriptionCard";
import header from "./components/header/header";
import currentWeather from "./components/weather-card/currentWeather";
import {
  getWeatherByCity,
  getForecastByCity,
  processForecastData,
  getWeatherByGeoLocation,
} from './api/weatherAPI';
import "./index.css";

let container;

function displayWeather(weatherData) {

  const date = new Date(weatherData.dt * 1000);
  const options = { weekday: 'short', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  const formattedWeatherData = {
    dateText: formattedDate,
    temperature: Math.round(weatherData.main.temp),
    weatherDescription: weatherData.weather[0].description,
    cityName: weatherData.name,
    icon: weatherData.weather[0].icon,
    feels_like: Math.round(weatherData.main.feels_like),
    wind_speed: weatherData.wind.speed,
    humidity: weatherData.main.humidity,
  };

  const feelsLike = weatherData.main.feels_like;
  const windSpeed = weatherData.wind.speed;
  const humidity = weatherData.main.humidity;


  const existingWeather = container.querySelector('.current-weather');
  if (existingWeather) {
    existingWeather.remove();
  }
  const existingDescription = container.querySelector('.description-card');
  if (existingDescription) {
    existingDescription.remove();
  }

  const weatherCondition = weatherData.weather[0].main;
  const basePath = 'assets/weather-icons/animated/';
  const image = document.querySelector('.weather-icon');

  const iconMap = {
    Clear: 'day.svg',
    Clearn: 'night.svg',
    FewClouds: 'cloudy-day-1.svg',
    FewCloudsN: 'cloudy-night-1.svg',
    ScatteredNclouds: 'cloudy-day-2.svg',
    ScatteredNcloudsN: 'cloudy-night-2.svg',
    BrokenClouds: 'cloudy-day-3.svg',
    BrokenNclouds: 'cloudy-night-3.svg',
    ShowerAin: 'rainy-3.svg',
    ShowerNain: 'rainy-3.svg',
    Rain: 'rainy-5.svg',
    RainN: 'rainy-5.svg',
    Thundestorm: 'thunderstorm.svg',
    ThundestormN: 'thunderstorm.svg',
    Snow: 'snowy-5.svg',
    SnowN: 'snowy-5.svg',
    Mist: 'mist.png',
    MistN: 'mist.png',
  };

  const iconFileName = iconMap[weatherCondition] || 'default-icon.svg';
  if (image) {
    image.src = `${basePath}${iconFileName}`;
  }

  container.appendChild(currentWeather(formattedWeatherData));
  container.appendChild(descriptionCard(feelsLike, windSpeed, humidity));
}

function displayForecast(forecastData) {

  const existingForecast = container.querySelector('.next-days');
  if (existingForecast) {
    existingForecast.remove();
  }
}

function fetchWeatherAndForecast(city) {
  getWeatherByCity(city).then(displayWeather).catch(error => {
    console.error("Error fetching current weather:", error);
  });

  getForecastByCity(city).then(displayForecast).catch(error => {
    console.error("Error fetching forecast data:", error);
  });
}

function handleSearch(query) {
  fetchWeatherAndForecast(query);
}

function handleGeolocationSuccess(position) {
  const { latitude, longitude } = position.coords;
  getWeatherByGeoLocation(latitude, longitude)
    .then(weatherData => {
      displayWeather(weatherData);
      return getForecastByCity(weatherData.name);
    })
    .then(displayForecast)
    .catch(error => {
      console.error('Error fetching weather with geolocation:', error);
      fetchWeatherAndForecast('London');
    });
}

function handleGeolocationError(error) {
  console.error('Error getting user location:', error);
  fetchWeatherAndForecast('London');
}

document.addEventListener('DOMContentLoaded', () => {
  const app = document.createElement('div');
  app.id = 'app';
  document.body.appendChild(app);

  container = document.createElement('div');
  container.className = 'container';
  app.appendChild(container);
  container.appendChild(header(handleSearch));

  navigator.geolocation.getCurrentPosition(
    handleGeolocationSuccess,
    handleGeolocationError,
    { timeout: 10000 }
  );
});