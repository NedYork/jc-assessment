import CONFIG from './../config';

export const REQUEST_SYNONYMS = 'REQUEST_SYNONYMS';
export const RECEIVE_SYNONYMS = 'RECEIVE_SYNONYMS';
export const REQUEST_SYNONYMS_ERR = 'REQUEST_SYNONYMS_ERR';

export const requestSynonyms = word => ({
  type: REQUEST_SYNONYMS,
  word,
});

export const receiveSynonyms = (word, json) => ({
  type: RECEIVE_SYNONYMS,
  word,
  synonyms: json.results[0].lexicalEntries[0].entries[0].senses[0].synonyms,
  receivedAt: Date.now(),
});

export const receiveSynonymsErr = () => ({
  type: REQUEST_SYNONYMS_ERR,
});

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const fetchSynonyms = word => (dispatch) => {
  dispatch(requestSynonyms(word));
  const url = `https://od-api.oxforddictionaries.com:443/api/v1/entries/en/${word}/synonyms`;
  return fetch(`${proxyUrl}${url}`, {
    headers: {
      Accept: 'application/json',
      app_id: CONFIG.APP_ID,
      app_key: CONFIG.APP_KEY,
    },
  })
    .then((response) => {
      if (!response.ok) {
        dispatch(receiveSynonymsErr(word));
        throw new Error('Something went wrong');
      }
      return response.json();
    })
    .then(json => dispatch(receiveSynonyms(word, json)))
    .catch((err) => { console.log(err); });
};

const shouldFetchSynonyms = (state, synonym) => {
  const synonyms = state.synonymsReducer.thesaurus[synonym];

  if (!synonyms) {
    return true;
  }
  if (synonyms.isFetching) {
    return false;
  }
  return false;
};

export const fetchSynonymsIfNeeded = synonym => (dispatch, getState) => {
  if (shouldFetchSynonyms(getState(), synonym)) {
    return dispatch(fetchSynonyms(synonym));
  }
  return null;
};

export const CLEAR_STORE = 'CLEAR_STORE';

export const clearStore = () => ({
  type: CLEAR_STORE,
});
