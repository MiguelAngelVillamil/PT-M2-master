import React, { useState } from 'react';
import style from './searchBar.module.css'

export default function SearchBar({onSearch}) {
  const [city, setCitie] = useState("");

  const handleInputChange = (e) => {
    setCitie(e.target.value);
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onchange={handleInputChange}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}