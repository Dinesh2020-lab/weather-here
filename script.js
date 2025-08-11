const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('City not found');
    return response.json();
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('weather-form');
    const input = document.getElementById('city-input');
    const result = document.getElementById('weather-result');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const city = input.value.trim();
        if (!city) return;
        result.textContent = 'Loading...';
        try {
            const data = await getWeather(city);
            result.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>${data.weather[0].main} - ${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind: ${data.wind.speed} m/s</p>
            `;
        } catch (err) {
            result.textContent = err.message;
        }
    });
});