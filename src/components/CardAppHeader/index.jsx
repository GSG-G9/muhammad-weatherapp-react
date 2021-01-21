import React from 'react';
import SearchForm from '../SearchForm';
import CardHeaderTitle from '../CardHeaderTitle';
import WeatherDetails from '../WeatherDetails';
import './style.css';

function CardAppHeader() {
  return (
    <div className="CardAppHeader">
      <SearchForm />
      <CardHeaderTitle />
      <WeatherDetails type="main" />
    </div>
  );
}

export default CardAppHeader;
