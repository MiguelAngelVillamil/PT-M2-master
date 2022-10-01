import React, { useState } from 'react';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  const handleInputChange = (event) => {
    setCity(event.target.value);
  }

  return (
    <form className="d-flex" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        onChange={handleInputChange}
        value={city}
      />
      <input
      className="btn btn-outline-success"
      type="submit"
      value="Search"
      />
    </form>
  );
}