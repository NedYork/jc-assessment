import {
  REQUEST_SYNONYMS,
  RECEIVE_SYNONYMS,
  REQUEST_SYNONYMS_ERR,
  CLEAR_STORE,
} from '../actions/thesaurus';

const initialState = {
  isFetching: false,
  fetchError: false,
  thesaurus: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_STORE:
      return {
        ...initialState,
      };
    case REQUEST_SYNONYMS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case RECEIVE_SYNONYMS:
      return {
        ...state,
        isFetching: false,
        fetchError: false,
        thesaurus: {
          ...state.thesaurus,
          [action.word]: action.synonyms.map(wordObj => wordObj.id),
        },
      };
    case REQUEST_SYNONYMS_ERR:
      return {
        ...state,
        fetchError: true,
      };
    default:
      return state;
  }
};
