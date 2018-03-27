import React, { Component } from "react";

const API_KEY = "b6792b75";

export class SearchForm extends Component {
  state = {
    inputMovie: ""
  };

  _handleChange = e => {
    this.setState({
      inputMovie: e.target.value
    });
  };

  _handleSubmit = e => {
    e.preventDefault();
    const { inputMovie } = this.state;
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(res => res.json())
      .then(results => {
        const { Search, totalResults } = results;
        console.log({ Search, totalResults });
        this.props.onChange(Search);
      });
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              onChange={this._handleChange}
              className="input"
              type="text"
              placeholder="Moview to search..."
            />
          </div>
          <div className="control">
            <button className="button is-info">Search</button>
          </div>
        </div>
      </form>
    );
  }
}
