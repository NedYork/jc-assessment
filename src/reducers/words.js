import { SET_CURRENT_WORD } from '../actions/words';

const initialState = { currentWord: '' };

export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_WORD:
      return {
        ...initialState,
        currentWord: action.word,
      };
    default:
      return initialState;
  }
};
