import React, { useState } from 'react';
import SearchResult from '../SearchResult';
import './style.css';

function SearchForm() {
  const [searchText, setSearchText] = useState('Gaza');
  const handleChange = (e) => {
    setSearchText(e.target.value);
    console.log(searchText);
  };

  return (
    <div className="SearchForm">
      <input className="input-search" type="search" name="city" id="search" placeholder="Search" onChange={handleChange} />
      <SearchResult />
    </div>
  );
}

export default SearchForm;
