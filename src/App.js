import React, { Component } from "react";
import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm";

import "bulma/css/bulma.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title>Search Movie</Title>
        <div className="search-form-wrapper">
          <SearchForm />
        </div>
      </div>
    );
  }
}

export default App;
