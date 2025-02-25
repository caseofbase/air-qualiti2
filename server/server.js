const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const { fetchAndStoreWeatherData } = require('./services/weatherService');
const { getWeatherData } = require('./controllers/weatherController');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize database connection
const db = require('./db/database');

// API Routes
app.get('/api/data', getWeatherData);
app.get('/dashboard', (req, res) => {
    res.send('Dashboard API is working');
});

// Test endpoint to manually trigger data fetch
app.get('/api/fetch-weather', async (req, res) => {
  try {
    console.log('Manually triggering weather data fetch...');
    const data = await fetchAndStoreWeatherData();
    res.json({ success: true, data });
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Schedule data fetching twice daily
cron.schedule('0 6,14 * * *', async () => {
  console.log('Fetching scheduled weather data...');
  await fetchAndStoreWeatherData();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 