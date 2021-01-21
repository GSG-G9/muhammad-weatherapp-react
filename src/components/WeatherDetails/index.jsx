import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function WeatherDetails({ type }) {
  return (
    <div className={`card--content--daily ${type === 'main' && 'card--header--temp'}`}>
      {type === 'daily' ? (<div className="card--content--daily_date">Saturday 23</div>) : null}
      <div className="card--content--daily_temp">
        <div className={`${type === 'main' && 'card--header--temp_icon'}`}>
          <img src="images/weathericons/clear-day.png" alt="icon" />
        </div>
        <span className="temp_max" id="max-temp">
          19
          <sup>
            °
          </sup>
          {type === 'main' ? 'C' : null}
        </span>
        {
          type === 'daily' ? (
            <span className="temp_min" id="min-temp">
              6
              <sup>°</sup>
            </span>
          ) : null
        }

      </div>
    </div>
  );
}

WeatherDetails.propTypes = {
  type: PropTypes.string.isRequired,
};

export default WeatherDetails;
