import React, { Component } from "react";
import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm";

import "bulma/css/bulma.css";
import "./App.css";

class App extends Component {
  state = { results: [] };

  _handleResults = results => {
    this.setState({ results });
  };

  _renderResults = () => {
    const { results } = this.state;
    return results.map(movie => <p key={movie.imdbId}>{movie.Title}</p>);
  };

  render() {
    return (
      <div className="App">
        <Title>Search Movie</Title>
        <div className="search-form-wrapper">
          <SearchForm onChange={this._handleResults} />
        </div>
        {this.state.results.length === 0 ? (
          <p>Sin resultados</p>
        ) : (
          this._renderResults()
        )}
      </div>
    );
  }
}

export default App;
