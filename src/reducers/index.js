import { combineReducers } from 'redux';
import synonymsReducer from './synonyms';
import wordsReducer from './words';

const rootReducer = combineReducers({
  synonymsReducer,
  wordsReducer,
});

export default rootReducer;
