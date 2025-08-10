# Weather App in a Day

A simple React app that fetches and displays real-time weather data using the OpenWeatherMap API.

## Features
- Search for weather by city name
- Displays temperature, weather description, and icon
- Loading and error states

## Setup
1. Clone or download this repo.
2. Install dependencies:
	```
	npm install
	```
3. Get your free API key from [OpenWeatherMap](https://openweathermap.org/api).
4. Add your API key to the `.env` file:
	```
	VITE_WEATHER_API_KEY=your_api_key_here
	```
5. Start the app:
	```
	npm run dev
	```

## Usage
- Enter a city name and view the current weather.
- If the city is invalid, a friendly error message will appear.

## Tech Stack
- React
- Vite
- OpenWeatherMap API

---

Lab instructions: See comments in `WeatherApp.jsx` for guidance on useEffect and state management.
# weather-app-in-a-day