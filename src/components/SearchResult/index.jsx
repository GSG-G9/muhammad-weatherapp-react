import React from 'react';
import PropTypes from 'prop-types';
import SearchResultItem from './SearchResultItem';
import './style.css';

function SearchResult({
  location, isSearching, setCoordsData, toggleSearchResult,
}) {
  console.log(location);
  const results = location.map((item) => (
    <SearchResultItem
      center={item.center}
      key={item.id}
      cityName={item.text}
      countryName={item.place_name}
      setCoordsData={setCoordsData}
      toggleSearchResult={toggleSearchResult}
    />
  ));
  return (
    <div className={`search-result-container ${isSearching && 'block'}`} id="search_result">
      {results}
    </div>
  );
}

SearchResult.propTypes = {
  location: PropTypes.arrayOf({}).isRequired,
  isSearching: PropTypes.bool.isRequired,
  setCoordsData: PropTypes.func.isRequired,
  toggleSearchResult: PropTypes.func.isRequired,
};

export default SearchResult;
