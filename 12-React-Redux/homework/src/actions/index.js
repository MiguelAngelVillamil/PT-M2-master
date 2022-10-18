const apiKey = "a1fd76ec"

export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload };
}
  
export function removeMovieFavorite(payload) {
  return { type: "REMOVE_MOVIE_FAVORITE", payload };
}

export function getMovies(title) {
  return function(dispatch) {

    return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_MOVIES", payload: json });
      });
  };
}

export function getMovieDetail(idMovie) {
  return function(dispatch) {

    return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${idMovie}`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
      });
  };
}