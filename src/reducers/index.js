import { combineReducers } from 'redux';

import statusReducer from './status';
import synonymsReducer from './synonyms';
import wordsReducer from './words';

const rootReducer = combineReducers({
  statusReducer,
  synonymsReducer,
  wordsReducer,
});

export default rootReducer;
