import location from '../../assets/icons/location-dot-solid.svg';
import clearSky from '../../assets/weather-svg/day.svg';
import clearNsky from '../../assets/weather-svg/night.svg';
import fewClouds from '../../assets/weather-svg/cloudy-day-1.svg';
import fewNclouds from '../../assets/weather-svg/cloudy-night-1.svg';
import scatteredClouds from '../../assets/weather-svg/cloudy-day-2.svg';
import scatteredNclouds from '../../assets/weather-svg/cloudy-night-2.svg';
import brokenClouds from '../../assets/weather-svg/cloudy-day-3.svg';
import brokenNclouds from '../../assets/weather-svg/cloudy-night-3.svg';
import showerAin from '../../assets/weather-svg/rainy-3.svg';
import showerNain from '../../assets/weather-svg/rainy-3.svg';
import rain from '../../assets/weather-svg/rainy-5.svg';
import rainN from '../../assets/weather-svg/rainy-5.svg';
import thundestorm from '../../assets/weather-svg/thunder.svg';
import thundestormN from '../../assets/weather-svg/thunder.svg';
import snow from '../../assets/weather-svg/snowy-5.svg';
import snowN from '../../assets/weather-svg/snowy-5.svg';
import mist from '../../assets/weather-svg/mist.png';
import mistN from '../../assets/weather-svg/mist.png';

const weatherIconsMap = {
  '01d': clearSky,
  '01n': clearNsky,
  '02d': fewClouds,
  '02n': fewNclouds,
  '03d': scatteredClouds,
  '03n': scatteredNclouds,
  '04d': brokenClouds,
  '04n': brokenNclouds,
  '09d': showerAin,
  '09n': showerNain,
  '10d': rain,
  '10n': rainN,
  '11d': thundestorm,
  '11n': thundestormN,
  '13d': snow,
  '13n': snowN,
  '50d': mist,
  '50n': mistN,
};

export { location, weatherIconsMap };