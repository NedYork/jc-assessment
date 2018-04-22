import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {
  static propTypes = {
    dispatchFetchSynonym: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
  }

  handleChange = (event) => {
    this.setState({ userInput: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatchFetchSynonym(this.state.userInput);
    this.setState({ userInput: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="user-input">
          Category:
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
