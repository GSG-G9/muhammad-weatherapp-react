import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchResult from '../SearchResult';
import './style.css';

function SearchForm({ getSearchText, location, setCoordsData }) {
  const [typing, setTyping] = useState(false);

  const handleChange = (e) => {
    getSearchText(e.target.value);
    if (e.target.value === '') {
      setTyping(false);
    } else {
      setTyping(true);
    }
  };

  return (
    <div className="SearchForm">
      <input className="input-search" type="search" name="city" id="search" placeholder="Search" onChange={handleChange} />
      <SearchResult
        setCoordsData={setCoordsData}
        location={location}
        isSearching={typing}
        toggleSearchResult={() => setTyping(false)}
      />
    </div>
  );
}

SearchForm.propTypes = {
  getSearchText: PropTypes.string.isRequired,
  location: PropTypes.arrayOf({}).isRequired,
  setCoordsData: PropTypes.func.isRequired,
};

export default SearchForm;
