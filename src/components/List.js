import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

const List = ({ words, setWord }) => (
  <ListGroup>
    {
      words.map(word => (
        <ListGroupItem
          key={word}
          onClick={() => { setWord(word); }}
        >
          {word}
        </ListGroupItem>
      ))
    }
  </ListGroup>
);

List.propTypes = {
  words: PropTypes.array.isRequired,
  setWord: PropTypes.func.isRequired,
};

export default List;
