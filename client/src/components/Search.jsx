import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

const Search = (props) => {

  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const showSuggestions = (e) => {
    setAddress(e.target.value);
    debouncedSave(e.target.value)
    setLoading(true);
  }

  const debouncedSave = useCallback(
    debounce((newValue) => props.getSuggestions(newValue), 300), []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(false);
    props.handleSearch(address);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <input className="search"
        autocomplete="off"
        name="address"
        value={address}
        placeholder="Address, City, State, Zip Code"
        onChange={(e) => showSuggestions(e)}/>
        <button type="submit" className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
      {loading && address.length && <div className="suggestion-container">
        <ul>
          {props.suggestions.slice(0,3).map((suggestion) => {
            return (
              <li className="suggestion"
                onClick={() => {
                  setAddress(suggestion);
                  setLoading(false);
                }}>
                {suggestion}
              </li>)
          })}
        </ul>
      </div>}
    </form>
  )
}

export default Search;