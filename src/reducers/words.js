import {
  SET_CURRENT_WORD,
  REQUEST_DEFINITIONS,
  RECEIVE_DEFINITIONS,
} from '../actions/words';

const initialState = { currentWord: '', dictionary: {} };

export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_WORD:
      return {
        ...initialState,
        currentWord: action.word,
      };
    case REQUEST_DEFINITIONS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case RECEIVE_DEFINITIONS:
      return {
        ...state,
        isFetching: false,
        dictionary: {
          ...state.dictionary,
          [action.word]: action.definitions,
        },
      };
    default:
      return initialState;
  }
};
