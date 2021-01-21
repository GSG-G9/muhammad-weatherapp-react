import React from 'react';
import './style.css';

function SearchForm() {
  return (
    <div className="result-card" data-lat="31.3402" data-long="34.3063" data-cityname="Khan Yunis" data-countryname="Palestinian Territories">
      <div className="result-card__header">
        Khan Yunis  - Palestinian Territories
        <span className="result-place-name" />
      </div>
      <div>
        <i className="fas fa-map-marker-alt" aria-hidden="true" />
        <span className="result-card--details__lat">lat: 34.3063</span>
        <span className="result-card--details__long">long: 31.3402</span>
      </div>
    </div>
  );
}

export default SearchForm;
