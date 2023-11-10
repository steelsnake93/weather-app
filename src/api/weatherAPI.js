import { API_KEY, BASE_URL } from './apiConfig';

export async function getWeatherByCity(city) {
  try {
    const weatherUrl = `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(weatherUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (e) {
    console.error('There was a problem fetching weather data:', e);
  }
}

export async function getForecastByCity(city) {
  try {
    const forecastUrl = `${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(forecastUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (e) {
    console.error('There was a problem fetching forecast data:', e);
  }
}

export function processForecastData(rawData) {
  const dailyForecasts = rawData.list.filter((item) => {
    const forecastTime = new Date(item.dt * 1000).getHours();
    return forecastTime === 12;
  });

  return dailyForecasts.map(forecast => {
    return {
      weekday: new Date(forecast.dt * 1000).toLocaleDateString(undefined, { weekday: 'long' }),
      temperature: forecast.main.temp,
      condition: forecast.weather[0].main,
      description: forecast.weather[0].description,
      icon: forecast.weather[0].icon,
      dateText: forecast.dt_txt,
    };
  });
}

export async function getWeatherByGeoLocation(lat, lon) {
  try {
    const weatherUrl = `${BASE_URL}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const response = await fetch(weatherUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (e) {
    console.error('There was a problem fetching weather data by geolocation:', e);
  }
}
