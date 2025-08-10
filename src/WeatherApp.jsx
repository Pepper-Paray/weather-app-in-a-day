import React, { useState, useEffect } from 'react';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

function WeatherApp() {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      setError('');
      try {
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
          throw new Error('City not found');
        }
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    }
    fetchWeather();
  }, [city]);

  function handleChange(e) {
    setCity(e.target.value);
  }

  return (
    <div style={{ background: '#fff', padding: 32, borderRadius: 8, boxShadow: '0 2px 8px #ccc', minWidth: 320 }}>
      <h2>Weather App</h2>
      <input
        type="text"
        value={city}
        onChange={handleChange}
        placeholder="Enter city name"
        style={{ padding: 8, width: '80%', marginBottom: 16 }}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && (
        <div>
          <h3>{weather.name}</h3>
          <p>{Math.round(weather.main.temp)}°C</p>
          <p>{weather.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
