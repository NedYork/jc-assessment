import React from 'react';
import PropTypes from 'prop-types';

const List = ({ words, setWord }) => (
  <ul>
    {
      words.map(word => (
        <li key={word} >
          <span
            onClick={() => {setWord(word)}}
          >
            {word}
          </span>
        </li>
      ))
    }
  </ul>
);

List.propTypes = {
  words: PropTypes.array.isRequired,
  setWord: PropTypes.func.isRequired,
};

export default List;
