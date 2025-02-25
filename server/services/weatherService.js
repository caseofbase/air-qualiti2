const axios = require('axios');
const supabase = require('../db/database');

const API_KEY = '3f8a4d2a8875fb203575175662bb64d7';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const cities = [
  'Toronto',
  'San Francisco',
  'New York',
  'Dallas', 
  'Boston',
  'Miami',
  'Houston'
];

const fetchCityData = async (city) => {
  try {
    // Get coordinates
    const geoResponse = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    );
    const [geoData] = geoResponse.data;

    if (!geoData) {
      throw new Error(`No location data found for ${city}`);
    }

    // Fetch both air quality and weather data
    const [airData, weatherData] = await Promise.all([
      axios.get(`${BASE_URL}/air_pollution?lat=${geoData.lat}&lon=${geoData.lon}&appid=${API_KEY}`),
      axios.get(`${BASE_URL}/weather?lat=${geoData.lat}&lon=${geoData.lon}&units=metric&appid=${API_KEY}`)
    ]);

    return {
      created_at: new Date().toISOString(), // Supabase timestamp
      city: city,
      temp: weatherData.data.main.temp,
      pm25: airData.data.list[0].components.pm2_5,
      pm10: airData.data.list[0].components.pm10,
      air_quality: getAirQualityLabel(airData.data.list[0].main.aqi)
    };
  } catch (error) {
    console.error(`Error fetching data for ${city}:`, error);
    return null;
  }
};

const getAirQualityLabel = (aqi) => {
  const labels = {
    1: 'Good',
    2: 'Fair',
    3: 'Moderate',
    4: 'Poor',
    5: 'Very Poor'
  };
  return labels[aqi] || 'Unknown';
};

exports.fetchAndStoreWeatherData = async () => {
  try {
    const results = await Promise.all(
      cities.map(city => fetchCityData(city))
    );
    
    const validResults = results.filter(result => result !== null);
    
    // Store in Supabase
    const { data, error } = await supabase
      .from('weather_data')
      .insert(validResults);

    if (error) throw error;
    
    return validResults;
  } catch (error) {
    console.error('Error in fetchAndStoreWeatherData:', error);
    throw error;
  }
};