import { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { addMovieFavorite, getMovies } from "../../actions";
import './Buscador.css';

export class Buscador extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    
    const { title } = this.state;

    return (
      <div>

        <form className="d-flex" role="search" onSubmit={this.handleSubmit}>

          <div>

            <input
              className="form-control me-2 spaced"
              placeholder="Search"
              aria-label="Search"

              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>

          <button className="btn btn-secondary spaced" type="submit">BUSCAR</button>

        </form>

        <ul className="spaced" style={{display: "flex", flexWrap: "wrap", }}>
          {
            this.props.movies?.map((movie) => (


            <div className="card mb-1" style={{maxWidth: "540px", margin: "10px"}} key={movie.imdbID}>
              <div className="row g-0">
                <div className="col-md-4">
                  <Link to={`/movie/${movie.imdbID}`}>
                    <img src={movie.Poster} className="img-fluid rounded-start" alt="cover"/>
                  </Link>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h2 className="card-title">{movie.Title}</h2>
                    <p className="card-text"><small className="text-muted">{movie.Year}</small></p>
                    <p className="card-text">Unfortunally this API doesn't have movies description in the globlal search end-point.</p>
                  </div>
                </div>
              </div>
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
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);
