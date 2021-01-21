import React from 'react';
import DailyWeather from '../DailyWeather';
import CardAppHeader from '../CardAppHeader';
import './style.css';

function WeatherApp() {
  return (
    <div className="container">
      <div className="card">
        <CardAppHeader />
        <DailyWeather />
      </div>
    </div>
  );
}

export default WeatherApp;
