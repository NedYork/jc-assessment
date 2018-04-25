import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Grid, Row, Col, Jumbotron } from 'react-bootstrap';

import { clearStore, fetchSynonymsIfNeeded } from '../actions/thesaurus';
import { fetchDefinitionIfNeeded, setCurrentWord } from '../actions/words';

import SearchForm from '../components/SearchForm';
import List from '../components/List';
import Loading from '../components/Loading';
import Word from '../components/Word';

import '../stylesheets/App.css';

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    dictionary: PropTypes.object,
    thesaurus: PropTypes.object,
    currentWord: PropTypes.string,
    statusState: PropTypes.object,
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
    const {
      currentWord,
      dictionary,
      thesaurus,
      statusState,
    } = this.props;
    const previouslySearchedWords = Object.keys(thesaurus);

    return (
      <div className="App">
        <Jumbotron>
          <h1>JumpCut Thesaurus</h1>
          <br />
          <p>
            This is a JumpCut Thesaurus. We only give the best synonyms.
          </p>
          <Grid>
            {
              statusState.error &&
              <h4 className="App-search-err">
                {
                  statusState.errorMessage
                }
              </h4>
            }
            <SearchForm dispatchFetchSynonym={this.dispatchFetchSynonym} />
            <Button
              bsStyle="danger"
              onClick={this.dispatchClearStore}
            >
              Clear History
            </Button>
          </Grid>
        </Jumbotron>
        { statusState.isLoading && <Loading />}
        <Grid>
          <Row>
            <Col xs={6} md={6}>
              <List
                words={previouslySearchedWords}
                setWord={this.dispatchSetCurrentWord}
              />
            </Col>
            <Col xs={6} md={6}>
              {
                dictionary[currentWord] &&
                <Word
                  word={currentWord}
                  definitions={dictionary[currentWord]}
                  synonyms={thesaurus[currentWord]}
                  setWord={this.dispatchSetCurrentWord}
                />
              }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  statusState: state.statusReducer,
  thesaurus: state.synonymsReducer.thesaurus,
  dictionary: state.wordsReducer.dictionary,
  currentWord: state.wordsReducer.currentWord,
});

export default connect(mapStateToProps)(App);
