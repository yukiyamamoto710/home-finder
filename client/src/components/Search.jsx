import React, { useState } from 'react';

const Search = (props) => {

  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const showSuggestions = (e) => {
    setAddress(e.target.value);
    props.getSuggestions(e.target.value);
    setLoading(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSearch(address);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <input className="search"
        name="address"
        value={address}
        placeholder="Address, City, State, Zip Code"
        onChange={(e) => showSuggestions(e)}/>
        <button type="submit" className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
      {loading && <div className="suggestion-container">
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