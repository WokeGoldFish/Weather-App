const searchBar = document.querySelector('.searchBar');
let button = document.querySelector('.btn');
const weatherData = document.querySelector('.weatherData');

const API = "4d54fd0e577c590e7146f7e332573714";

button.addEventListener('click', async () => {
    const citySearch = searchBar.value;
    try {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=imperial&APPID=${API}`)
    const data = await (res.json())
        weatherData.innerHTML = `
            <ul class ="list-unstyled">
                <li class="city">Weather in ${data.name}</li>
                <li class="sky">${data.weather[0].description}</li>
                <li class="temp">Currently ${data.main.temp}°F</li>
                <li class="tempHigh">High of ${data.main.temp_max}°F</li>
                <li class="tempLow">Low of ${data.main.temp_min}°F</li>
                <li class="humidity">${data.main.humidity}% humidity</li>
            </ul> `;
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1920x1080/?${data.name}')`
    } catch(err){
        alert("Incorrect Spelling or it doesn't exist")

    }

        
});