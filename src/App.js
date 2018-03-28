import React, { Component } from "react";
import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm";
import { MoviesList } from "./components/MoviesList";

import "bulma/css/bulma.css";
import "./App.css";

class App extends Component {
  state = { results: [] };

  _handleResults = results => {
    this.setState({ results });
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
          <MoviesList movies={this.state.results} />
        )}
      </div>
    );
  }
}

export default App;
