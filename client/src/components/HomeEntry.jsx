import React from 'react';

const HomeEntry = ({home}) => {
  const {url, price, beds, baths, square_feet, name, address, city, state, zip} = home;
  return (
    <a href={url} className="home-url">
      <div className="home-entry">
        <div className="property-type">{name}</div>
        <i className="fas fa-home"></i>
        <div className="text">
          <div className="home-price">${price.toLocaleString()}</div>
          <div className="home-details">{beds} Beds / {baths} Baths / {square_feet} sqft</div>
          <div className="home-address">{address}, {city}, {state}, {zip}</div>
        </div>
      </div>
    </a>
  )
}

export default HomeEntry;