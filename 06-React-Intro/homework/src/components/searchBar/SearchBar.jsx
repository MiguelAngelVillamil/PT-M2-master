import React from 'react';
import style from './searchBar.module.css'

export default function SearchBar(props) {

  return (
    <div className={style.contenedor}>
      <input className={style.entrada} type="text" placeholder="Search a city..."/>
      <button className={style.boton} onClick={() => props.onSearch()}>Search</button>
    </div>
    )
};