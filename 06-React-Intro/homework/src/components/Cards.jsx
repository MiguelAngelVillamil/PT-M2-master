import React from 'react';
import Card from './Card.jsx';

// Cities es un array de objetos que recuperamos en el App.js
// Este array está exportando en data.js
export default function Cards({cities}) {
  
  return (
    <div>
      {
        cities.map((city, i) => {
          return <Card
            max={city.main.temp_max}
            min={city.main.temp_min}
            name={city.name}
            img={city.weather[0].icon}
            onClose={() => alert(city.name)}
            key={i}
            />
        })
      }
    </div>
  );
};