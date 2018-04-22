import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearStore, fetchSynonymsIfNeeded } from '../actions/thesaurus';
import { fetchDefinitionIfNeeded, setCurrentWord } from '../actions/words';
import SearchForm from '../components/SearchForm';
import List from '../components/List';
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

  renderCurrentWord() {
    const { currentWord, dictionary } = this.props;
    return dictionary[currentWord] ? (
      <div>
        <h3>Current Word: {currentWord}</h3>
        <ul>
          {
            dictionary[currentWord].map(def => (
              <li key={def}>
                {def}
              </li>
            ))
          }
        </ul>
      </div>
    ) : null;
  }

  render() {
    const { thesaurus } = this.props;
    const previouslySearchedWords = Object.keys(thesaurus);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">JumpCut Thesaurus</h1>
          <SearchForm dispatchFetchSynonym={this.dispatchFetchSynonym} />
        </header>
        <button onClick={this.dispatchClearStore}> Clear </button>
        { this.renderCurrentWord() }
        <List words={previouslySearchedWords} setWord={this.dispatchSetCurrentWord} />
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
