import CONFIG from './../config';

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
  const url = `https://od-api.oxforddictionaries.com:443/api/v1/entries/en/${wordId}`;
  return fetch(`${proxyUrl}${url}`, {
    headers: {
      Accept: 'application/json',
      app_id: CONFIG.APP_ID,
      app_key: CONFIG.APP_KEY,
    },
  })
    .then(response => response.json())
    .then(json => dispatch(receiveDefinition(wordId, json)));
};

// const shouldFetchSynonyms = (state, synonym) => {
//   const synonyms = state.synonymsReducer.thesaurus[synonym];
//
//   if (!synonyms) {
//     return true;
//   }
//   if (synonyms.isFetching) {
//     return false;
//   }
//   return false;
// };

export const fetchDefinitionIfNeeded = word => (dispatch, getState) => {
  // if (shouldFetchSynonyms(getState(), word)) {
  return dispatch(fetchDefinition(word));
  // }
  // return null;
};
