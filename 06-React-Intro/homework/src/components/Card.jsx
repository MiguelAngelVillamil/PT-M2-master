import React from 'react';

// El componente nos pedirá un objeto por parámetro y nosotros en el retorno rescataremos los valores.
export default function Card(props) {
  
  // Cada componente <Card> toma forma de un div con sus elementos dentro.
  return (
    <div>
      <button onClick={props.onClose}>X</button>
      <h4>{props.name}</h4>
      <p>Min:</p>
      <p>{props.min}</p>
      <p>Max:</p>
      <p>{props.max}</p>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Icon"/>
    </div>
  );
};