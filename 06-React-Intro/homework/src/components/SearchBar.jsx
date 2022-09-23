import React from 'react';

export default function SearchBar(props) {

  return (
    <div>
      <input type="text" id="input" placeholder="Search a city..."/>
      <button onClick={() => props.onSearch()}>Search</button>
    </div>
    )
};