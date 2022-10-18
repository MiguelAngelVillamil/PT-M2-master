import { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class Favorites extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.movies?.map(movie => (
              <div key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <img src={movie.poster} alt="cover" />
                  <h1>{movie.title}</h1>
                </Link>
                <button onClick={() => this.props.removeMovieFavorite(movie.id)}>X</button>
              </div>
            ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavorites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: idMovie => dispatch(removeMovieFavorite(idMovie))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
