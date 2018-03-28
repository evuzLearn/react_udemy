import React, { Component } from "react";
import PropTypes from "prop-types";

import { Movie } from "./Movie";

export class MoviesList extends Component {
  static propTypes = {
    movies: PropTypes.array
  };

  render() {
    const { movies } = this.props;
    return (
      <div className="movies-list">
        {movies.map(movie => (
          <div className="movies-list-item" key={movie.imdbID}>
            <Movie
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
            />
          </div>
        ))}
      </div>
    );
  }
}
