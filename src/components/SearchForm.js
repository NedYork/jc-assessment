import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    }
  }

  handleChange = (event) => {
    this.setState({ userInput: event.target.value });
  }

  handleSubmit = (event) => {
    console.log('A name was submitted: ' + this.state.userInput);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
       <label>
         Name:
         <input type="text" value={this.state.userInput} onChange={this.handleChange} />
       </label>
       <input type="submit" value="Submit" />
     </form>
    )
  }
}
