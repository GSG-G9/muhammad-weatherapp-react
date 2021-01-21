import React from 'react';
import PropTypes from 'prop-types';

import SearchForm from '../SearchForm';
import CardHeaderTitle from '../CardHeaderTitle';
import WeatherDetails from '../WeatherDetails';
import './style.css';

function CardAppHeader({ getSearchText, location, setCoordsData }) {
  console.log(location);
  return (
    <div className="CardAppHeader">
      <SearchForm setCoordsData={setCoordsData} location={location} getSearchText={getSearchText} />
      <CardHeaderTitle />
      <WeatherDetails type="main" />
    </div>
  );
}

CardAppHeader.propTypes = {
  getSearchText: PropTypes.string.isRequired,
  location: PropTypes.arrayOf({}).isRequired,
  setCoordsData: PropTypes.func.isRequired,
};

export default CardAppHeader;
