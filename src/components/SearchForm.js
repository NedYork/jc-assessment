import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl, FormGroup } from 'react-bootstrap';

import '../stylesheets/SearchForm.css';

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
      <form
        onSubmit={this.handleSubmit}
        className="SearchForm-container"
      >
        <FormGroup
          controlId="formBasicText"
        >
          <FormControl
            type="text"
            placeholder="Enter text"
            value={this.state.userInput}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
