import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

const Word = ({ word, definitions }) => (
  <div>
    <Panel>
      <Panel.Heading>
        <Panel.Title componentClass="h3">{word}</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <ul>
          {
            definitions.map(def => (
              <li key={def}>
                {def}
              </li>
            ))
        }
        </ul>
      </Panel.Body>
    </Panel>
  </div>
);

Word.propTypes = {
  word: PropTypes.string.isRequired,
  definitions: PropTypes.array.isRequired,
};

export default Word;
