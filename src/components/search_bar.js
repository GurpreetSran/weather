import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';


class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    if (this.state.term) {
      this.props.fetchWeather(this.state.term);
      this.setState({ term: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          type="text"
          placeholder="Next five days forecast of your favourite city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />

        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

export default connect(null, { fetchWeather })(SearchBar);
