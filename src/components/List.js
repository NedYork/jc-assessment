import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { words } = this.props;
    return (
      <ul>
        {
          words.map(word => (
            <li key={word} >
              <span
                onClick={() => {this.props.setWord(word)}}
              >
                {word}
              </span>
            </li>
          ))
        }
      </ul>
    );
  }
}
