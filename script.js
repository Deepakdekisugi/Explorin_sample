const API_KEY = '605722ecd79962b1dd142ca55dada0dc';
const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const weatherDataSection = document.querySelector('.weather-data');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();

    if (!city) return;

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const data = await response.json();

        if (data && data.weather) {
            const temperatureElement = document.getElementById('temperature');
            const humidityElement = document.getElementById('humidity');
            const windSpeedElement = document.getElementById('wind-speed');

            temperatureElement.textContent = `${data.main.temp}°C`;
            humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
            windSpeedElement.textContent = `Wind Speed: ${data.wind.speed} km/h`;

            weatherDataSection.style.display = 'block';
        }
    } catch (error) {
        console.error('Error:', error);
    }

    cityInput.value = '';
});
