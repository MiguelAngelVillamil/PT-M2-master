import { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieDetail, addMovieFavorite } from '../../actions/index';

import './Movie.css';

export class Movie extends Component {

  componentDidMount(){
    const movieId = this.props.match.params.id;
    this.props.getMovieDetail(movieId);
  }

  render() {
    return (
      <div className="movie-detail">
        <h1>{this.props.movie.Title}</h1>
        <h4>{this.props.movie.Year}</h4>
        <h4>{this.props.movie.Runtime}</h4>
        <h4>{this.props.movie.Director}</h4>
        <h4>{this.props.movie.Actors}</h4>
        <p>{this.props.movie.Plot}</p>
        <img src={this.props.movie.Poster} alt="cover" />

        <button onClick={() => this.props.addMovieFavorite({
            poster: this.props.movie.Poster,
            title: this.props.movie.Title,
            id: this.props.movie.imdbID
          })}>fav</button>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movieDetail
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovieDetail: id => dispatch(getMovieDetail(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);