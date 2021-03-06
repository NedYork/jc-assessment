import {
  SET_CURRENT_WORD,
  REQUEST_DEFINITIONS,
  RECEIVE_DEFINITIONS,
} from '../actions/words';

const initialState = {
  currentWord: '',
  dictionary: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_WORD:
      return {
        ...state,
        currentWord: action.word,
      };
    case REQUEST_DEFINITIONS:
      return {
        ...state,
        isFetching: true,
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
      return state;
  }
};
