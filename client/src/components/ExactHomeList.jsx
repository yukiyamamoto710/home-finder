import React, { useState, useEffect } from 'react';

import HomeEntry from './HomeEntry.jsx';

const ExactHomeList = (props) => {

  const { list } = props;

  if (!list.length) {
    return (
      <div className="container">
        <h4>Exact Match Found...</h4>
        <div className="no-result">No Result Found</div>
      </div>
    )
  } else {
    return (
      <div className="container">
        <h4>Exact Match Found...</h4>
        <ul className="carousel">
        {displayed.map((home) => {
          return <HomeEntry key={home.id} home={home}/>
        })}
        </ul>
      </div>
    )
  }
}

export default ExactHomeList;