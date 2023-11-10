import './style.css';
import temperatureIcon from '../../assets/icons/temperature.svg';
import windIcon from '../../assets/icons/wind-solid.svg';
import dropletIcon from '../../assets/icons/droplet-solid.svg';

function createWeatherItem(icon, data, unit, textDescription) {
    const itemData = document.createElement('div');
    itemData.className = 'item-data';
    
    itemData.innerHTML = `
        <div class='description-icon'>
            <img class='icon filter' src=${icon} alt='${textDescription}'>
        </div>
        <div class='data-description'>${data}${unit}</div>
        <div class='text-description'>${textDescription}</div>
    `;

    return itemData;
}

export default function descriptionCard(feelsLike, windSpeed, humidity) {
    const descriptionCardElement = document.createElement('div');
    descriptionCardElement.className = 'description-card';

    const containerBox = document.createElement('div');
    containerBox.className = 'container-box';

    const descriptionItems = document.createElement('div');
    descriptionItems.className = 'description-items';

    const weatherData = [
        { icon: windIcon, data: Math.round(windSpeed), unit: ' m/s', text: 'Wind' },
        { icon: temperatureIcon, data: Math.round(feelsLike), unit: '°', text: 'Feels' },
        { icon: dropletIcon, data: humidity, unit: '%', text: 'Humidity' },
    ];

    weatherData.forEach((item) => {
        const itemElement = createWeatherItem(item.icon, item.data, item.unit, item.text);
        descriptionItems.appendChild(itemElement);
    });

    containerBox.appendChild(descriptionItems);
    descriptionCardElement.appendChild(containerBox);
    return descriptionCardElement;
}
