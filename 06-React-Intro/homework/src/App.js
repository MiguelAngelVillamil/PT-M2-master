import React from 'react';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import SearchBar from './components/searchBar/SearchBar.jsx';
import data from './data.js';

function App() {
  return (
    <div className="App">
    
      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>

      <hr />

      <div>
        <Cards
          cities={data}
        />
      </div>
    </div>
  );
}

export default App;
