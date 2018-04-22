import { combineReducers } from 'redux';
import {
  REQUEST_SYNONYMS,
  RECEIVE_SYNONYMS,
} from '../actions';

const initialState = {
  isFetching: false,
  thesaurus: {},
};

const synonymsReducer = (state = initialState, action) => {
  switch (action.type) {
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
        thesaurus: {
          ...state.thesaurus,
          [action.word]: action.synonyms.map(wordObj => wordObj.text),
        },
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  synonymsReducer,
});

export default rootReducer;