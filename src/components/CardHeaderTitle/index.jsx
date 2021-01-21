import React from 'react';
import './style.css';

function CardHeaderTitle() {
  return (
    <div className="CardHeaderTitle">
      <div className="card--header--title_placename">
        <span className="city-name">Gaza - Palestine</span>
      </div>
      <div className="card--header--title_clock"><h2>12:35 PM</h2></div>
    </div>
  );
}

export default CardHeaderTitle;
