import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSynonymsIfNeeded } from '../actions';
import SearchForm from '../components/SearchForm';
import List from '../components/List';
import './App.css';

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    thesaurus: PropTypes.object,
  }

  dispatchFetchSynonym = (word) => {
    this.props.dispatch(fetchSynonymsIfNeeded(word));
  }

  render() {
    const { thesaurus } = this.props;
    const previouslySearchedWords = Object.keys(thesaurus);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <SearchForm dispatchFetchSynonym={this.dispatchFetchSynonym} />
        </header>

        <List words={previouslySearchedWords} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  thesaurus: state.synonymsReducer.thesaurus,
});

export default connect(mapStateToProps)(App);
