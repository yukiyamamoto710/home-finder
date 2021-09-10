import React, { useState } from 'react';

const Search = (props) => {

  const [address, setAddress] = useState('');

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
        onChange={(e) => setAddress(e.target.value)}/>
        <button type="submit" className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  )
}

export default Search;