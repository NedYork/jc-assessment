import {
  REQUEST_SYNONYMS,
  RECEIVE_SYNONYMS,
  CLEAR_STORE,
} from '../actions/thesaurus';

const initialState = {
  isFetching: false,
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
      };
    case RECEIVE_SYNONYMS:
      return {
        ...state,
        isFetching: false,
        thesaurus: {
          ...state.thesaurus,
          [action.word]: action.synonyms.map(wordObj => wordObj.id),
        },
      };
    default:
      return state;
  }
};
