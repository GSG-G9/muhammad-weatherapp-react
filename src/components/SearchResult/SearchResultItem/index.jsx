import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function SearchForm({
  cityName, countryName, center, setCoordsData, toggleSearchResult,
}) {
  const handleClick = () => {
    setCoordsData(center);
    toggleSearchResult();
  };

  return (
    <div
      className="result-card"
      onClick={handleClick}
      onKeyPress={() => {}}
      role="button"
      tabIndex="0"
    >
      <div className="result-card__header">
        {cityName}
        {' '}
        -
        {' '}
        {countryName.split(', ').reverse()[0]}
        <span className="result-place-name" />
      </div>
      <div>
        <i className="fas fa-map-marker-alt" aria-hidden="true" />
        <span className="result-card--details__lat">
          lat:
          {center[1].toFixed(4)}
        </span>
        <span className="result-card--details__long">
          long:
          {center[0].toFixed(4)}
        </span>
      </div>
    </div>
  );
}

SearchForm.propTypes = {
  cityName: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  center: PropTypes.arrayOf().isRequired,
  setCoordsData: PropTypes.func.isRequired,
  toggleSearchResult: PropTypes.func.isRequired,
};

export default SearchForm;
