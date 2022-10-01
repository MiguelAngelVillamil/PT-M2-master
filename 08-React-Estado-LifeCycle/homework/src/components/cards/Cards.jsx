import React from 'react';
import Card from '../card/Card.jsx';

// Cities es un array de objetos que recuperamos en el App.js
// Este array está exportando en data.js
export default function Cards({cities, onClose}) {
  
  return (
    <div>
      {
        cities.map((city, i) => {
          return <Card
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            onClose={() => onClose(city.id)}
            key={city.id}
            />
        })
      }
    </div>
  );
};