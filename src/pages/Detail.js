import React, { Component } from 'react';
import PropTypes from 'prop-types';

const API_KEY = 'b6792b75';

export class Detail extends Component {
  static propTypes = {
    id: PropTypes.string,
  };

  state = { movie: {} };

  _fetchMovie = () => {
    const { id } = this.props;
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(res => res.json())
      .then(movie => {
        console.log(movie);
        this.setState({ movie });
      });
  };

  _goBack = () => {
    window.history.back();
  };

  componentDidMount() {
    this._fetchMovie();
  }

  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
    return (
      <div>
        <button onClick={this._goBack}>Volver</button>
        <h1>{Title}</h1>
        <img src={Poster} alt="Poster" />
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    );
  }
}
