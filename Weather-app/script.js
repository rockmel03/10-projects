const apiKey = 'efd3eb99b3817579a0278a0027f11367';

const weatherDataEl = document.querySelector('#weather-data');
const cityInputEl = document.querySelector('#city-input');

const formEl = document.querySelector('.container form');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);
})

async function getWeatherData(cityValue) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const data = await response.json()

        const temperature = Math.round(data.main.temp)
        const description = data.weather[0].description
        const icon = data.weather[0].icon
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed}m/s`
        ]

        weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">`
        weatherDataEl.querySelector('.temperature').innerHTML = `${temperature}&deg;C`
        weatherDataEl.querySelector('.description').innerHTML = description
        weatherDataEl.querySelector('.details').innerHTML = `${details.map((dets) => `<div>${dets} </div>`).join('')}`
        // weatherDataEl.querySelector('.details').innerHTML = ``
        // for(i=0; i<details.length; i++){
        //     weatherDataEl.querySelector('.details').innerHTML += `<div>${details[i]}</div>`
        // }
    } catch (error) {
        
        weatherDataEl.querySelector(".icon").innerHTML = ''
        weatherDataEl.querySelector('.temperature').innerHTML = ``
        weatherDataEl.querySelector('.description').innerHTML = 'Error: no details found, try again later'
        weatherDataEl.querySelector('.details').innerHTML = ''

    }
}