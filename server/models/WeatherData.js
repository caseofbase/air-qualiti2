const mongoose = require('mongoose');

const weatherDataSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  temp: {
    type: Number,
    required: true
  },
  pm25: {
    type: Number,
    required: true
  },
  pm10: {
    type: Number,
    required: true
  },
  airQuality: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('WeatherData', weatherDataSchema); 