import React from "react";
import { Route } from "react-router-dom";

import Favorites from "./components/Favorites/Favorites.jsx";
import Buscador from "./components/Buscador/Buscador.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Movie from "./components/Movie/Movie.jsx";

export default function App() {
  return (
      <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Buscador} />
          <Route path="/favs" component={Favorites} />
          <Route path="/movie/:id" component={Movie} />
      </React.Fragment>
  );
}
