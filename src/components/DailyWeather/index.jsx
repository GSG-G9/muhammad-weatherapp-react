import React from 'react';
import DailyWeatherItem from '../WeatherDetails';
import './style.css';

function DailyWeather() {
  return (
    <div className="DailyWeather">
      <DailyWeatherItem type="daily" />
    </div>
  );
}

export default DailyWeather;
