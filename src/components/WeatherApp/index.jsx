import React, { useState, useLayoutEffect } from 'react';
import DailyWeather from '../DailyWeather';
import CardAppHeader from '../CardAppHeader';

import { getLocaltionData, getWeatherData } from '../../utils/fetchData';
import './style.css';

function WeatherApp() {
  const [searchText, setSearchText] = useState('gaza');
  const [location, setLocation] = useState([]);
  const [coords, setCoords] = useState([34.3063, 31.3402]);
  // const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState('');

  useLayoutEffect(() => {
    getLocaltionData(searchText)
      .then((res) => res)
      .then(({ data }) => {
        setLocation(data.features);
        setError('');
      })
      .catch((err) => setError(err));
  }, [searchText]);

  useLayoutEffect(() => {
    getWeatherData({ lat: coords[1], long: coords[0] })
      .then((res) => res)
      .then((data) => console.log(data))
      .catch((err) => setError(err));
  }, [coords]);

  const handleSearchText = (text) => {
    setSearchText(text);
  };

  const setCoordsData = (center) => {
    console.log(center);
    setCoords(center);
  };

  return (
    <div className="container">
      <div className="card">
        {error !== '' && (<p>Something wrong!</p>)}
        <CardAppHeader
          location={location}
          getSearchText={handleSearchText}
          setCoordsData={setCoordsData}
        />
        <DailyWeather />
      </div>
    </div>
  );
}

export default WeatherApp;
