import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, Grid, Jumbotron } from 'react-bootstrap';

import { clearStore, fetchSynonymsIfNeeded } from '../actions/thesaurus';
import { fetchDefinitionIfNeeded, setCurrentWord } from '../actions/words';
import SearchForm from '../components/SearchForm';
import List from '../components/List';
import Word from '../components/Word';

import './App.css';

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    dictionary: PropTypes.object,
    thesaurus: PropTypes.object,
    currentWord: PropTypes.string,
  }

  dispatchFetchSynonym = (word) => {
    this.props.dispatch(fetchSynonymsIfNeeded(word));
  }

  dispatchClearStore = () => {
    this.props.dispatch(clearStore());
  }

  dispatchSetCurrentWord = (word) => {
    this.props.dispatch(setCurrentWord(word));
    this.props.dispatch(fetchDefinitionIfNeeded(word));
  }

  render() {
    const { currentWord, dictionary, thesaurus } = this.props;
    const previouslySearchedWords = Object.keys(thesaurus);
    return (
      <div className="App">
        <Jumbotron>
          <h1>JumpCut Thesaurus</h1>
          <br />
          <p>
            This is a JumpCut Thesaurus. It gives a
          </p>
          <Grid>
            <SearchForm dispatchFetchSynonym={this.dispatchFetchSynonym} />
            <Button
              bsStyle="danger"
              onClick={this.dispatchClearStore}
            >
              Clear History
            </Button>
          </Grid>
        </Jumbotron>

        <Grid>
          {
            dictionary[currentWord] &&
            <Word word={currentWord} definitions={dictionary[currentWord]} />
          }
          <List words={previouslySearchedWords} setWord={this.dispatchSetCurrentWord} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  thesaurus: state.synonymsReducer.thesaurus,
  dictionary: state.wordsReducer.dictionary,
  currentWord: state.wordsReducer.currentWord,
});

export default connect(mapStateToProps)(App);
