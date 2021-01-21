import React from 'react';
import SearchResultItem from './SearchResultItem';
import './style.css';

function SearchForm() {
  return (
    <div className="search-result-container block" id="search_result">
      <SearchResultItem />
    </div>
  );
}

export default SearchForm;
