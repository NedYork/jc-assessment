import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

import './Word.css';

const Word = ({
  word,
  definitions,
  synonyms,
  setWord,
}) => (
  <div>
    <Panel>
      <Panel.Heading>
        <Panel.Title componentClass="h3">{word}</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        {
          definitions && <h3 className="def-syn-title">Definition</h3>
        }
        <ul>
          {
            definitions && definitions.map(def => (
              <li key={def}>
                {def}
              </li>
            ))
          }
        </ul>
        {
          synonyms && <h3 className="def-syn-title">Synonyms</h3>
        }
        <ul>
          {
            synonyms && synonyms.map(syn => (
              <li key={syn} onClick={() => { setWord(syn); }} >
                {syn}
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
  definitions: PropTypes.array,
  synonyms: PropTypes.array,
  setWord: PropTypes.func,
};

export default Word;
