import CONFIG from './../config';
import { clearStatus, isLoading, receiveError } from './status';

export const SET_CURRENT_WORD = 'SET_CURRENT_WORD';
export const REQUEST_DEFINITIONS = 'REQUEST_DEFINITIONS';
export const RECEIVE_DEFINITIONS = 'RECEIVE_DEFINITIONS';

export const setCurrentWord = word => ({
  type: SET_CURRENT_WORD,
  word,
});

export const requestDefinition = word => ({
  type: REQUEST_DEFINITIONS,
  word,
});

export const receiveDefinition = (word, json) => ({
  type: RECEIVE_DEFINITIONS,
  word,
  definitions: json.results[0].lexicalEntries[0].entries[0].senses[0].definitions,
  receivedAt: Date.now(),
});

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const fetchDefinition = wordId => (dispatch) => {
  dispatch(requestDefinition(wordId));
  dispatch(isLoading());
  const url = `https://od-api.oxforddictionaries.com:443/api/v1/entries/en/${wordId}`;
  return fetch(`${proxyUrl}${url}`, {
    headers: {
      Accept: 'application/json',
      app_id: CONFIG.APP_ID,
      app_key: CONFIG.APP_KEY,
    },
  })
    .then((response) => {
      if (!response.ok) {
        const errMsg = 'Something went wrong. Cannot retreive definitions.';
        dispatch(receiveError(errMsg));
        throw new Error(errMsg);
      }
      return response.json();
    })
    .then((json) => {
      dispatch(receiveDefinition(wordId, json));
      dispatch(clearStatus());
    })
    .catch((err) => { console.log(err); });
};

const shouldFetchDefinition = (state, word) => {
  const definition = state.wordsReducer.dictionary[word];

  if (!definition) {
    return true;
  }
  if (definition.isFetching) {
    return false;
  }
  return false;
};

export const fetchDefinitionIfNeeded = word => (dispatch, getState) => {
  if (shouldFetchDefinition(getState(), word)) {
    return dispatch(fetchDefinition(word));
  }
  return null;
};
