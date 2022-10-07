import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from '../components/About.jsx'
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import Ciudad from '../components/Ciudad.jsx'

const apiKey = "4ae2636d8dfbdc3044bede63951a019b"

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      
      <Routes>
        <Route exact path='/'
          render={() => <Cards cities={cities} onClose={onClose}/>}
        />
        <Route exact path='/about'
          element={<About />}
        />
        <Route
          exact path='/ciudad/:ciudadId'
          render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)} />}
        />
      </Routes>
    </div>
  );
}

//* Nos falta definir como le pasamos los componentes que queremo renderizar: 
// 		* a traves de component <Route path="/" component={NavBar} /> en  dicho caso no le podemos 
// 		pasar props a NavBar
// 		* a traves de render <Route path="/" render = {() => <NavBar unaProp='hola'/>} /> en esta oportunidad, si
// 		podemos pasarle props
// 		* a traves del child method: 
// 			<Route path="/"> 
// 				<NavBar unaProp='hola'/> 
// 			</Route> 
// 		donde tambien le podemos pasar props y la cantidad de componente que querramos


export default App;
