/**
 * The code has a carousel component where it displays only three searched results at a time.
 * If there're more than three results available, the arrow buttons will appear.
*/

import React, { useState, useEffect } from 'react';

import HomeEntry from './HomeEntry.jsx';

const NearbyHomeList = (props) => {

  const { list } = props;

  const [idx, setIndex] = useState(0);
  const [displayed, setDisplay] = useState(list.slice(0,3));

  useEffect(() => {
    setDisplay(list.slice(0, 3))
  }, [list])

  if (!list.length) {
    return (
      <div className="container">
        <h4>Nearby Homes...</h4>
        <div className="no-result">No Result Found</div>
      </div>
    )
  } else {
    return (
      <div className="container">
        <h4>Nearby Homes...</h4>
        <ul className="carousel">
        <button className="slideLeft"
          onClick={() => {
            setIndex(idx-1)
            setDisplay(list.slice(idx-1, idx+2))}}
            disabled={idx === 0}>
            &lt;
        </button>
        {displayed.map((home) => {
          return <HomeEntry key={home.id} home={home}/>
        })}
        <button className="slideRight"
          onClick={() => {
            setIndex(idx+1)
            setDisplay(list.slice(idx+1, idx+4))}}
            disabled={list.length < 3 || idx === list.length-3}>
            &gt;
        </button>
        </ul>
      </div>
    )
  }
}

export default NearbyHomeList;