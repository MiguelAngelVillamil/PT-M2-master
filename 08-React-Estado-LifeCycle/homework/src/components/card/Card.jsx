import React from 'react';
import style from './card.module.css'

// El componente nos pedirá un objeto por parámetro y nosotros en el retorno rescataremos los valores.
export default function Card(props) {
  
  // Cada componente <Card> toma forma de un div con sus elementos dentro.
  return (
    <div className={style.contenedor}>
      <div className={style.interfaz}>
        <h2 className={style.titulo}>{props.name}</h2>
        <button className={style.botones} onClick={props.onClose}>X</button>
      </div>
      

      <hr/>

      <div className={style.elemento}>
        <h6>Mínima:</h6>
        <h5>{props.min}°</h5>
      </div>
      
      <div className={style.elemento}>
        <h6>Máxima:</h6>
        <h5>{props.max}°</h5>
      </div>
      
      <img className={style.imagen} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Icon"/>
    </div>
  );
};